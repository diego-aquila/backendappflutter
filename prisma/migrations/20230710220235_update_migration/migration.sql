*
  Warnings:

  - Added the required column `feedbacks` to the `FeedbackExam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FeedbackExam` ADD COLUMN `feedbacks` JSON NOT NULL;
