export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-gray-800 dark:text-gray-200">AlgoVis</span> — Crafted with care by{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">Bhushan & Vedant</span>
        </p>
      </div>
    </footer>
  );
}
