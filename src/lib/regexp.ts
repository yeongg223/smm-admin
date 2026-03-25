export const ID_RULES = {
  min: 4,
  max: 20,
  regexp: /^[a-zA-z0-9]+$/,
};

export const PASSWORD_RULES = {
  min: 8,
  max: 20,
  regexp: /^[A-Za-z\d!@#$]+$/,
};

export const GENERAL_TEXT_RULES = {
  min: 1,
  max: 100,
  regexp: /^[가-힣A-Za-z0-9\x20-\x7E]+$/,
};
