import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProfileEntity } from './profile.entity';
import { RoleEntity } from './role.entity';

@Entity('account')
export class AccountEntity extends BaseEntity {
  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  roleId: string;

  @ManyToOne(() => RoleEntity, (role) => role.accountEntities)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  roleEntity: RoleEntity;

  @OneToOne(() => ProfileEntity)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  profileEntity: ProfileEntity;
}
