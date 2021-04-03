import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

jest.mock('axios', () => ({
  create: jest.fn().mockReturnValue('axios-instance'),
}));
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockConfigService = {
  get: jest.fn().mockReturnValue({
    posts: { baseURL: 'posts' },
    notifications: { baseURL: 'notifications' },
    upload: { baseURL: 'upload' },
    media: { baseURL: 'media' },
  }),
};

const mockInterceptors = {
  addHeader: jest.fn(),
  changeData: jest.fn(),
};

describe('ClientsService', () => {
  let clientsService: ClientsService;

  beforeEach(async () => {
    const testClientsModule: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        ClientsService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: 'axios',
          useValue: mockedAxios,
        },
        {
          provide: 'interceptors',
          useValue: mockInterceptors,
        },
      ],
    }).compile();

    clientsService = testClientsModule.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(clientsService).toBeDefined();
  });

  describe('Clients', () => {
    describe('Posts', () => {
      it('should be axios instance', () => {
        expect(clientsService['clients'].postsClient).toBe('axios-instance');
      });
    });
  });

  // describe("API's", () => {
  //   describe('Posts', () => {
  //     it('');
  //   });
  // describe('Notifications', () => {});
  // describe('Media', () => {});
  // describe('Upload', () => {});
  // });
});
