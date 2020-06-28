import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDogs1593126892431 implements MigrationInterface {
    name = 'CreateDogs1593126892431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "age" integer NOT NULL, "breed" character varying(100), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog"`);
    }

}
