/*
  Warnings:

  - Made the column `fullname` on table `Attendant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `Attendant` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attendant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Attendant" ("fullname", "id", "image", "password", "username") SELECT "fullname", "id", "image", "password", "username" FROM "Attendant";
DROP TABLE "Attendant";
ALTER TABLE "new_Attendant" RENAME TO "Attendant";
CREATE UNIQUE INDEX "Attendant_username_key" ON "Attendant"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
