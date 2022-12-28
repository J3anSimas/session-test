/*
  Warnings:

  - You are about to drop the column `name` on the `Attendant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attendant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT,
    "username" TEXT,
    "password" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_Attendant" ("id", "image", "password", "username") SELECT "id", "image", "password", "username" FROM "Attendant";
DROP TABLE "Attendant";
ALTER TABLE "new_Attendant" RENAME TO "Attendant";
CREATE UNIQUE INDEX "Attendant_username_key" ON "Attendant"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
