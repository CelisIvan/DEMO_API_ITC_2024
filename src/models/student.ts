import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
import {BaseEntity} from 'typeorm'
import {Field, ObjectType} from 'type-graphql'

@Entity()
@ObjectType()
export class Student extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @CreateDateColumn({type: 'timestamp'})
    created_at!: string;

    @Field()
    @Column()
    name!: string;
    
    @Field()
    @Column()
    last_name!: string;

    @Field()
    @Column()
    favorite_color?: string;

    @Field()
    @Column()
    email!: string;

    @Field()
    @Column()
    birth_date?: Date;

}