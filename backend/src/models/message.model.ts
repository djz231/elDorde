import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'messages',
  timestamps: true,
  underscored: true,
})
export class Message extends Model {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100],
    },
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 2000],
    },
  })
  message!: string;
}