-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'MODERATOR', 'MEMBER', 'BANNED');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('InStock', 'RunningOut', 'EMPTY');

-- CreateEnum
CREATE TYPE "VOTE" AS ENUM ('UP', 'DOWN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER,
    "colors" TEXT[],
    "description" TEXT[],
    "photos" TEXT[],
    "size" TEXT[],
    "rate" INTEGER NOT NULL DEFAULT 0,
    "authorId" TEXT NOT NULL,
    "status" "STATUS" NOT NULL,
    "countLeft" INTEGER NOT NULL,
    "countSold" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rate" "VOTE" NOT NULL,
    "adventages" TEXT NOT NULL,
    "disadventages" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("productId","userId")
);

-- CreateTable
CREATE TABLE "Shipping" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "insurance" BOOLEAN NOT NULL,

    CONSTRAINT "Shipping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_favorite" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_shipping" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shipping_id_key" ON "Shipping"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_favorite_AB_unique" ON "_favorite"("A", "B");

-- CreateIndex
CREATE INDEX "_favorite_B_index" ON "_favorite"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_shipping_AB_unique" ON "_shipping"("A", "B");

-- CreateIndex
CREATE INDEX "_shipping_B_index" ON "_shipping"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favorite" ADD CONSTRAINT "_favorite_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favorite" ADD CONSTRAINT "_favorite_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_shipping" ADD CONSTRAINT "_shipping_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_shipping" ADD CONSTRAINT "_shipping_B_fkey" FOREIGN KEY ("B") REFERENCES "Shipping"("id") ON DELETE CASCADE ON UPDATE CASCADE;
