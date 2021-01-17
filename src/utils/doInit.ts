export default function doInit(value: any) {
  if (typeof value === 'string') return;

  if (Array.isArray(value)) {
    value.forEach((item) => {
      doInit(item);
    });
  }

  if (value?.hasOwnProperty('hydrate')) {
    value.hydrate();
  }

}
