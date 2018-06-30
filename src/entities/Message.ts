import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import Chat from "./Chat";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}
export default Message;
