// models/user.model.ts
import {
	Table,
	Column,
	Model,
	DataType,
	PrimaryKey,
	Default,
	AllowNull,
	ForeignKey,
	CreatedAt,
	UpdatedAt,
	DeletedAt,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { User } from './user.model'; // For createdBy/updatedBy relations if needed

@Table({
	tableName: 'user',
	paranoid: true,
})
export class User extends Model<User> {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	id!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	firstName!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	lastName!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	mobile!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	email!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	password!: string;

	@AllowNull(true)
	@Column(DataType.TEXT)
	profileImage?: string;

	@AllowNull(false)
	@Default('1')
	@Column(DataType.ENUM('1', '0'))
	status!: '1' | '0';

	@ForeignKey(() => Role)
	@AllowNull(true)
	@Column(DataType.UUID)
	roleId?: string;

	@ForeignKey(() => User)
	@AllowNull(true)
	@Column(DataType.UUID)
	createdBy?: string;

	@ForeignKey(() => User)
	@AllowNull(true)
	@Column(DataType.UUID)
	updatedBy?: string;

	@ForeignKey(() => User)
	@AllowNull(true)
	@Column(DataType.UUID)
	deletedBy?: string;

	@CreatedAt
	@Column(DataType.DATE)
	createdAt!: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	updatedAt?: Date;

	@DeletedAt
	@Column(DataType.DATE)
	deletedAt?: Date;
}
