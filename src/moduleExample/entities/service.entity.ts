import { Entity, Column } from 'typeorm';

import Model from '../../shared/entity.model';

@Entity('posts')
export class Service extends Model {
  @Column()
  col1: string;

  @Column()
  col2: string;
}
