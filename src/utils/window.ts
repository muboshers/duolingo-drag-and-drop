let customWindow = {
  innerWidth: 768,
};

if (typeof window !== "undefined") {
  customWindow = window;
}

export { customWindow };
