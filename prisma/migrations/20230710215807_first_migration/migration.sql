-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `name` VARCHAR(191) NOT NULL,
    `cpf` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `celphone` VARCHAR(191) NOT NULL,
    `classFK` VARCHAR(191) NOT NULL,
    `roleFK` VARCHAR(191) NOT NULL,
    `planFK` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Classes_id_key`(`id`),
    UNIQUE INDEX `Classes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Exams_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExamUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `examsFK` INTEGER NOT NULL,
    `userFK` INTEGER NOT NULL,

    UNIQUE INDEX `ExamUser_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedbackExam` (
    `id` INTEGER NOT NULL,
    `feedback` VARCHAR(191) NOT NULL,
    `usersIdFK` INTEGER NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `examsIdFK` INTEGER NOT NULL,

    UNIQUE INDEX `FeedbackExam_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Requisitos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `Plans_id_key`(`id`),
    UNIQUE INDEX `Plans_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Roles_id_key`(`id`),
    UNIQUE INDEX `Roles_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mural` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(191) NOT NULL,
    `classFK` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mural_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_classFK_fkey` FOREIGN KEY (`classFK`) REFERENCES `Classes`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_roleFK_fkey` FOREIGN KEY (`roleFK`) REFERENCES `Roles`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_planFK_fkey` FOREIGN KEY (`planFK`) REFERENCES `Plans`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamUser` ADD CONSTRAINT `ExamUser_examsFK_fkey` FOREIGN KEY (`examsFK`) REFERENCES `Exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamUser` ADD CONSTRAINT `ExamUser_userFK_fkey` FOREIGN KEY (`userFK`) REFERENCES `Users`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_usersIdFK_fkey` FOREIGN KEY (`usersIdFK`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FeedbackExam` ADD CONSTRAINT `FeedbackExam_examsIdFK_fkey` FOREIGN KEY (`examsIdFK`) REFERENCES `Exams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mural` ADD CONSTRAINT `Mural_classFK_fkey` FOREIGN KEY (`classFK`) REFERENCES `Classes`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
