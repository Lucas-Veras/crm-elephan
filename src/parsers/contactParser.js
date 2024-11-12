export const contactsParser = (contact) => {
  return {
    id: contact.Id,
    avatarUrl: contact.AvatarUrl,
    name: contact.Name,
    email: contact.Email,
    cpf: contact.CPF,
    cnpj: contact.CNPJ,
    dataNascimento: contact.Birthday,
    createAt: contact.CreateDate,
    updateAt: contact.LastUpdateDate,
  };
};
