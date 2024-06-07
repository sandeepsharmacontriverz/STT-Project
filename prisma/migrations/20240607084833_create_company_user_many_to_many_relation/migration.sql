-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnCompanies" (
    "companyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UsersOnCompanies_pkey" PRIMARY KEY ("userId","companyId")
);

-- AddForeignKey
ALTER TABLE "UsersOnCompanies" ADD CONSTRAINT "UsersOnCompanies_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCompanies" ADD CONSTRAINT "UsersOnCompanies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
