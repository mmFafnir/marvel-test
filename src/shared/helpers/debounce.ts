// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any) => any>(
  func: F,
  wait: number
) {
  let timeout: NodeJS.Timeout;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
}
