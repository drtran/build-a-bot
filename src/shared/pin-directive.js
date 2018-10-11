export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
  // bind: (element, binding) => {
  //   Object.keys(binding.value).forEach((position) => {
  //     element.style[position] = binding.value[position];
  //   });
  //   element.style.position = 'absolute';

  // meth 2 passing arguments:
  // Object.keys(binding.value).forEach((position) => {
  //   element.style[position] = binding.value[position];
  // });
  // element.style.position = 'absolute';

  // meth 1 passing arguments:
  // if (binding.arg !== 'position') return;

  // Object.keys(binding.modifiers).forEach((key) => {
  //   element.style[key] = '5px';
  // });

  // element.style.position = 'absolute';

  // Hard-coded directive
  // element.style.position = 'absolute';
  // element.style.bottom = '5px';
  // element.style.right = '5px';
  // },
}
