import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';

@Entity('match_history')
export class MatchHistoryEntity {
  @PrimaryColumn()
  idProfileFrom: string;

  @PrimaryColumn()
  idProfileTo: string;

  @Column()
  isLiked: boolean;

  @ManyToOne(() => ProfileEntity, (profile) => profile.listMatchedHistory)
  @JoinColumn({ name: 'idProfileFrom', referencedColumnName: 'id' })
  profileFrom: ProfileEntity;

  @ManyToOne(() => ProfileEntity, (profile) => profile.listMatchHistory)
  @JoinColumn({ name: 'idProfileTo', referencedColumnName: 'id' })
  profileTo: ProfileEntity;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
