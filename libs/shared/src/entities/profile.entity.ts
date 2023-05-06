import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FilterSettingEntity } from './filter_setting.entity';
import { ImageEntity } from './image.entity';
import { MatchHistoryEntity } from './match_history.entity';

@Entity('profile')
export class ProfileEntity extends BaseEntity {
  @Column()
  yob: Date;

  @OneToMany(() => ImageEntity, (image) => image.profileEntity)
  imageEntities: ImageEntity[];

  @OneToMany(() => MatchHistoryEntity, (matchHistory) => matchHistory.profileTo)
  listMatchHistory: MatchHistoryEntity[];

  @OneToMany(
    () => MatchHistoryEntity,
    (matchHistory) => matchHistory.profileFrom
  )
  listMatchedHistory: MatchHistoryEntity[];

  @OneToOne(() => FilterSettingEntity, (filterSetting) => filterSetting)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  filterSetting: FilterSettingEntity;
}
