import {
	Table,
	Column,
	Model,
	PrimaryKey,
	Default,
	DataType,
	AllowNull,
	CreatedAt,
	UpdatedAt,
	DeletedAt,
} from 'sequelize-typescript';

@Table({
	tableName: 'role',
	timestamps: true,
	paranoid: true,
	defaultScope: {
		where: {
			deletedAt: null,
		},
	},
	scopes: {
		withDeleted: {
			where: {},
		},
	},
})
export class Role extends Model<Role> {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	id!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	name!: string;

	@AllowNull(false)
	@Default(false)
	@Column(DataType.BOOLEAN)
	isSystemAdmin!: boolean;

	@AllowNull(false)
	@Default(false)
	@Column(DataType.BOOLEAN)
	isAdmin!: boolean;

	@AllowNull(false)
	@Default(false)
	@Column(DataType.BOOLEAN)
	systemDefault!: boolean;

	@AllowNull(false)
	@Column(DataType.TEXT)
	description!: string;

	@AllowNull(true)
	@Column(DataType.INTEGER)
	level?: number;

	@AllowNull(false)
	@Default('1')
	@Column(DataType.ENUM('1', '0'))
	status!: '1' | '0';

	@CreatedAt
	@Default(DataType.NOW)
	@Column(DataType.DATE)
	createdAt!: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	updatedAt!: Date;

	@DeletedAt
	@Column(DataType.DATE)
	deletedAt?: Date;

	// Optional custom logic
	static associate(models: any) {
		// Define associations here if needed
	}

	// Call your plugin method like this if it’s global
	static afterSync() {
		(this as any).hasAuditLogs?.();
	}
}
