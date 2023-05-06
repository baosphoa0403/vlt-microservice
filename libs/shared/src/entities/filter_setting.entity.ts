import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('filter_setting')
export class FilterSettingEntity extends BaseEntity {
  @Column()
  gender: string;

  @Column()
  language: string;

  @Column()
  distance: number;

  @Column()
  ageFrom: number;

  @Column()
  ageTo: number;

  @Column()
  religion: string;

  @Column()
  skip: number;
}
