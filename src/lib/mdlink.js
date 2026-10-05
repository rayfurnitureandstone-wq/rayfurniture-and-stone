// Ubah "[teks](/href)" jadi anchor HTML. Dipakai untuk keyword di dalam data.
export const mdLink = (s) =>
  s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');