import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
  FaShieldAlt,
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import styles from './Header.module.css';

interface NavLinkItem {
  label: string;
  path: string;
  links?: NavLinkItem[];
}

interface NavItem {
  label: string;
  key?: string;
  path?: string;
  links?: NavLinkItem[];
}

// Navigation structure
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', key: 'home', path: '/' },
  {
    label: 'Shop By Category',
    key: 'category',
    links: [
      { label: 'Skin Care', path: '/categories/skin-care' },
      { label: 'Beauty & Cosmetics', path: '/categories/beauty-care-cosmetics' },
      { label: 'Vitamins & Supplements', path: '/categories/vitamins-supplements' },
      { label: 'Medicine', path: '/categories/medicine' },
      { label: 'Hygiene', path: '/categories/general-hygiene' },
      { label: 'Home Healthcare', path: '/categories/home-healthcare' },
    ],
  },
  {
    label: 'Shop By Condition',
    key: 'condition',
    links: [
      { label: 'Hypertension', path: '/conditions/htn' },
      { label: 'Diabetes', path: '/conditions/diabetes' },
      { label: 'Cough, Cold & Flu', path: '/conditions/flu' },
      { label: 'UTI', path: '/conditions/uti-infections' },
      { label: 'Skin Treatment', path: '/conditions/skin-treatment' },
    ],
  },
  {
    label: 'Shop By Body System',
    key: 'system',
    links: [
      { label: 'Reproductive', path: '/system/reproductive' },
      { label: 'Respiratory', path: '/system/respiratory' },
      { label: 'Diabetes', path: '/system/diabetes' },
      { label: 'GIT', path: '/system/git' },
      { label: 'Renal', path: '/system/renal' },
      { label: 'Nervous', path: '/system/nervous' },
      { label: 'ENT', path: '/system/ent' },
      { label: 'Oral Hygiene', path: '/system/oral-hygiene' },
      { label: 'MSK', path: '/system/msk' },
    ],
  },
  { label: 'Services', path: '/about-us' },
  { label: 'Contact', path: '/contact-us' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount] = useState(0);

  const dropdownRef = useRef<HTMLLIElement>(null);  
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Render dropdown menu items
  const renderDropdownItems = (items: NavLinkItem[]) => (
    <div className={styles.dropdownMenu}>
      {items.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={styles.dropdownItem}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  // Render mobile dropdown items
  const renderMobileDropdownItems = (items: NavLinkItem[]) => (
    <div className={styles.mobileDropdownMenu}>
      {items.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={styles.mobileDropdownItem}
          onClick={closeMobileMenu}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <header className={styles.header}>
      {/* Top Promo Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.promoMessage}>
            <span className={styles.promoIcon}>🚚</span>
            <span className={styles.promoText}>FREE SHIPPING | ORDER BY DECEMBER 10</span>
            <span className={styles.promoSubtext}>TO RECEIVE BY CHRISTMAS OR ORDERS OVER $25</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <Link to="/" className={styles.logo}>
              <FaShieldAlt className={styles.logoIcon} />
              <span className={styles.logoText}>OBAT CHEMISTS</span>
            </Link>

            {/* Desktop Search */}
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search medicine, medical products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton} aria-label="Search">
                <FaSearch className={styles.searchIcon} />
              </button>
            </form>

            {/* Header Actions */}
            <div className={styles.headerActions}>
              <Link to="/login" className={styles.actionButton}>
                <FaUser className={styles.actionIcon} />
                <span className={styles.actionText}>Your Account</span>
              </Link>

              <Link to="/cart" className={styles.cartButton}>
                <FaShoppingCart className={styles.cartIcon} />
                {cartCount > 0 && (
                  <span className={styles.cartBadge}>{cartCount}</span>
                )}
                <span className={styles.actionText}>Your Cart</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.navigation} aria-label="Main navigation">
        <div className={styles.container}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key || item.label}
                className={`${styles.navItem} ${
                  item.links && activeDropdown === item.label ? styles.dropdownOpen : ''
                }`}
                ref={item.links ? dropdownRef : null}
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    className={styles.navLink}
                    onClick={() => item.links && toggleDropdown(item.label)}
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    {item.links && (
                      <FaChevronDown
                        className={`${styles.dropdownIcon} ${
                          activeDropdown === item.label ? styles.rotated : ''
                        }`}
                      />
                    )}
                  </button>
                )}
                {item.links && activeDropdown === item.label && renderDropdownItems(item.links)}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        ref={mobileMenuRef}
      >
        {/* Mobile Menu Header */}
        <div className={styles.mobileMenuHeader}>
          <Link to="/" className={styles.mobileLogo} onClick={closeMobileMenu}>
            <FaShieldAlt className={styles.logoIcon} />
            <span className={styles.logoText}>OBAT CHEMISTS</span>
          </Link>
          <button
            className={styles.closeButton}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Mobile Search */}
        <form className={styles.mobileSearchForm} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search medicine, medical products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.mobileSearchInput}
          />
          <button type="submit" className={styles.mobileSearchButton} aria-label="Search">
            <FaSearch />
          </button>
        </form>

        {/* Mobile Navigation */}
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key || item.label} className={styles.mobileNavItem}>
              {item.path && !item.links ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ) : item.links ? (
                <div
                  className={`${styles.mobileDropdown} ${
                    activeDropdown === item.label ? styles.open : ''
                  }`}
                >
                  <button
                    className={styles.mobileDropdownToggle}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <FaChevronDown
                      className={`${styles.mobileDropdownIcon} ${
                        activeDropdown === item.label ? styles.rotated : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && renderMobileDropdownItems(item.links)}
                </div>
              ) : (
                <span className={styles.mobileNavLink}>{item.label}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Actions */}
        <div className={styles.mobileActions}>
          <Link to="/login" className={styles.mobileActionButton} onClick={closeMobileMenu}>
            <FaUser />
            Your Account
          </Link>
          <Link to="/cart" className={styles.mobileActionButton} onClick={closeMobileMenu}>
            <FaShoppingCart />
            Your Cart
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} aria-hidden="true" />
      )}
    </header>
  );
};

export default Header;
