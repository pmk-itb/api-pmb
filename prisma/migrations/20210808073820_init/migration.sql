-- CreateEnum
CREATE TYPE "Location" AS ENUM ('GANESA', 'JATINANGOR', 'CIREBON', 'WALINI');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "MemberStatus" AS ENUM ('ACTIVE', 'GRADUATED', 'DROPPED_OUT', 'ON_LEAVE', 'TRANSFERRED', 'DECEASED');

-- CreateEnum
CREATE TYPE "Relationship" AS ENUM ('AYAH', 'IBU', 'WALI', 'KAKAK', 'ADIK', 'BIBI', 'PAMAN', 'KAKEK', 'NENEK');

-- CreateEnum
CREATE TYPE "DiscipleshipStatus" AS ENUM ('PENDING', 'OK', 'NEED_ATTENTION');

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "location" "Location" NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "majors" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(7) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "nimPrefix" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "nim" INTEGER,
    "tpbNim" INTEGER,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "majorId" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthDate" TIMESTAMPTZ NOT NULL,
    "year" INTEGER NOT NULL,
    "line" VARCHAR(31),
    "phone" VARCHAR(31),
    "email" VARCHAR(255),
    "currentAddress" VARCHAR(1023),
    "originProvince" VARCHAR(255),
    "originCity" VARCHAR(255),
    "originAddress" VARCHAR(1023),
    "originSchool" VARCHAR(255),
    "currentChurch" VARCHAR(255),
    "originChurch" VARCHAR(255),
    "status" "MemberStatus" NOT NULL DEFAULT E'ACTIVE',
    "notes" TEXT,
    "parentId" INTEGER NOT NULL,
    "discipleshipId" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "relationship" "Relationship" NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipleships" (
    "id" SERIAL NOT NULL,
    "leaderId" INTEGER,
    "institution" VARCHAR(255),
    "startDate" TIMESTAMPTZ,
    "status" "DiscipleshipStatus" NOT NULL DEFAULT E'OK',
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "members.nim_unique" ON "members"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "members.tpbNim_unique" ON "members"("tpbNim");

-- CreateIndex
CREATE UNIQUE INDEX "discipleships_leaderId_unique" ON "discipleships"("leaderId");

-- AddForeignKey
ALTER TABLE "majors" ADD FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD FOREIGN KEY ("majorId") REFERENCES "majors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD FOREIGN KEY ("discipleshipId") REFERENCES "discipleships"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discipleships" ADD FOREIGN KEY ("leaderId") REFERENCES "members"("id") ON DELETE SET NULL ON UPDATE CASCADE;
