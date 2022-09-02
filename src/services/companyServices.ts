import * as companyRepository from "../repositories/companyRepository.js";

export async function findCompany(companyKey: string) {
  const company = await companyRepository.findByApiKey(companyKey);

  if (!company) {
    throw { status: 401, message: "Esta empresa não está cadastrada!" };
  }

  return company;
}
