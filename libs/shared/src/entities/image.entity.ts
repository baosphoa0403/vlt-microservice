import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProfileEntity } from './profile.entity';

@Entity('image')
export class ImageEntity extends BaseEntity {
  @Column()
  url: string;

  @Column({ nullable: false, type: 'varchar', length: 36 })
  profileId: string;

  @ManyToOne(() => ProfileEntity, (profile) => profile)
  @JoinColumn({ name: 'profileId', referencedColumnName: 'id' })
  profileEntity: ProfileEntity;
}
