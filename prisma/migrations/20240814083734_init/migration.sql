-- CreateTable
CREATE TABLE `Berita` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `isi_berita` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
