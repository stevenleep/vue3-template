export function getCode(phone: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: "123456", phone });
    }, 1000);
  });
}

export function login(phone: string, code: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "xxx", phone, code });
    }, 1500);
  });
}
