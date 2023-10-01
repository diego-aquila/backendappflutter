/*
  Warnings:

  - You are about to alter the column `classFK` on the `Mural` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `classFK` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `roleFK` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `planFK` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Mural` DROP FOREIGN KEY `Mural_classFK_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_classFK_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_planFK_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_roleFK_fkey`;

-- AlterTable
ALTER TABLE `Mural` MODIFY `classFK` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `classFK` INTEGER NOT NULL,
    MODIFY `roleFK` INTEGER NOT NULL,
    MODIFY `planFK` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_classFK_fkey` FOREIGN KEY (`classFK`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleFK_fkey` FOREIGN KEY (`roleFK`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_planFK_fkey` FOREIGN KEY (`planFK`) REFERENCES `Plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mural` ADD CONSTRAINT `Mural_classFK_fkey` FOREIGN KEY (`classFK`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
