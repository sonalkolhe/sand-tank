/** @format */
export const hidden = function () {
  const el = document.querySelector('.alert');
  el?.parentElement.removeChild(el);
};
export const showAlert = function (type, message) {
  let markup;
  if (type === 'success')
    markup = `<div role="alert" class="alert fixed top-0 left-1/2 z-[999] transform -translate-x-1/2 rounded-xl shadow-2xl border border-gray-100 bg-white p-4 w-full sm:w-auto">
  <div class="flex items-start gap-4">
    <span class="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div class="flex-1">
      <strong class="block font-medium text-gray-900"> Changes saved </strong>

      <p class="mt-1 text-sm text-gray-700">${message}</p>
    </div>

    <button class="cut text-gray-500 transition hover:text-gray-600">
      <span class="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`;
  else
    markup = `<div role="alert" class="alert fixed top-0 left-1/2 transform -translate-x-1/2 z-[999] shadow-2xl rounded border-s-4 border-red-500 bg-red-50 p-4 w-full sm:w-auto">
    <strong class="block font-medium text-red-800">Something went wrong</strong>
    <p class="mt-2 text-sm text-red-700">${message}</p>
</div>
`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hidden, 4000);
  document.querySelector('.cut')?.addEventListener('click', function () {
    hidden();
  });
};