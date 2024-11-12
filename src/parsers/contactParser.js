export const contactsParser = (contact) => {
  return {
    id: contact.Id,
    avatarUrl: contact.AvatarUrl,
    name: contact.Name,
    email: contact.Email,
    cpf: contact.CPF,
    cnpj: contact.CNPJ,
    birthday: contact.Birthday,
    createAt: contact.CreateDate,
    updateAt: contact.LastUpdateDate,
    Company:
      contact.Company && Object.keys(contact.Company).length > 0
        ? {
            id: contact.Company.Id,
            name: contact.Company.Name,
            cnpj: contact.Company.CNPJ,
            createAt: contact.Company.CreateDate,
            updateAt: contact.Company.LastUpdateDate,
          }
        : null,
  };
};
