
export default () => {
  let cwd = process.cwd();
  if (process.env.APP_ROOT) {
    // avoid repeat cwd path
    if (!path.basenameisAbsolute(process.env.APP_ROOT)) {
      return path.join(cwd, process.env.APP_ROOT);
    }
    return process.env.APP_ROOT;
  }
  return cwd;
};
