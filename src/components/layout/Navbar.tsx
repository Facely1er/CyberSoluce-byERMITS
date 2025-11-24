import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignJustify, X, ChevronDown, BarChart3, GitBranch, Target, Users, Brain, DollarSign, FileText, Package, Shield, Box, Lock, Home, CheckSquare, Calendar, Database, Bell, BookOpen, Presentation, Calculator, UserCircle, FolderOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [governanceMenuOpen, setGovernanceMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [orchestrationMenuOpen, setOrchestrationMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  // Primary navigation items
  const primaryNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Workflow', href: '/workflow', icon: BarChart3 },
    { name: 'Domains', href: '#', icon: Box, children: [
      { name: 'CyberCaution', href: '/domains/threat-intelligence', icon: Shield },
      { name: 'VendorSoluce', href: '/domains/supply-chain-risk', icon: Box },
      { name: 'CyberCorrect', href: '/domains/compliance-management', icon: Lock },
      { name: 'CyberCertitude', href: '/domains/training-awareness', icon: FileText },
    ]},
    {
      name: 'Governance',
      href: '#',
      icon: Users,
      children: [
        { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
        { name: 'Framework Mapper', href: '/framework-mapper', icon: GitBranch },
        { name: 'Maturity Tracker', href: '/maturity-tracker', icon: Target },
        { name: 'Compliance Orchestrator', href: '/compliance-orchestrator', icon: Users },
        { name: 'Audit Packager', href: '/audit-packager', icon: Package },
        { name: 'Executive Reporting', href: '/executive-reporting', icon: Presentation },
        { name: 'Budget Simulator', href: '/budget-simulator', icon: Calculator },
      ],
    },
    {
      name: 'Orchestration',
      href: '#',
      icon: CheckSquare,
      children: [
        { name: 'Task Management', href: '/orchestration/tasks', icon: CheckSquare },
        { name: 'Timeline Management', href: '/orchestration/timelines', icon: Calendar },
        { name: 'Evidence Vault', href: '/orchestration/evidence', icon: Database },
        { name: 'Notification Center', href: '/orchestration/notifications', icon: Bell },
        { name: 'NIST Controls', href: '/nist/controls', icon: Shield },
        { name: 'NIST Compliance', href: '/nist/compliance', icon: CheckSquare },
        { name: 'NIST Evidence', href: '/nist/evidence', icon: Database },
        { name: 'NIST Tasks', href: '/nist/tasks', icon: CheckSquare },
        { name: 'NIST Team', href: '/nist/team', icon: UserCircle },
        { name: 'NIST Assets', href: '/nist/assets', icon: FolderOpen },
        { name: 'NIST Policies', href: '/nist/policies', icon: FileText },
        { name: 'NIST Calendar', href: '/nist/calendar', icon: Calendar },
      ],
    },
    { name: 'Intelligence', href: '/intelligence', icon: Brain },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Resources', href: '/resources', icon: BookOpen },
  ];

  // Check if a path is active for highlighting menu items
  const isPathActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Function to handle menu clicks
  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Governance') {
      setGovernanceMenuOpen(!governanceMenuOpen);
      setProductMenuOpen(false);
      setOrchestrationMenuOpen(false);
    } else if (itemName === 'Domains') {
      setProductMenuOpen(!productMenuOpen);
      setGovernanceMenuOpen(false);
      setOrchestrationMenuOpen(false);
    } else if (itemName === 'Orchestration') {
      setOrchestrationMenuOpen(!orchestrationMenuOpen);
      setGovernanceMenuOpen(false);
      setProductMenuOpen(false);
    } else {
      setGovernanceMenuOpen(false);
      setProductMenuOpen(false);
      setOrchestrationMenuOpen(false);
    }
  };


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/cybersoluce.png" alt="CyberSoluce" className="h-10 w-10 mr-2" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">CyberSoluce™</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight hidden sm:block">by ERMITS</span>
              </div>
            </Link>
          </div>

          {/* Centered navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2 flex-1 justify-center max-w-5xl mx-4">
              {primaryNavigation.map((item) => (
                item.children ? (
                  <div key={item.name} className="relative">
                    <button
                      className={`inline-flex items-center px-2.5 xl:px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        ((item.name === 'Governance' && (location.pathname.includes('framework') || location.pathname.includes('maturity') || location.pathname.includes('compliance') || location.pathname.includes('audit') || location.pathname.includes('executive') || location.pathname.includes('budget'))) ||
                         (item.name === 'Domains' && location.pathname.includes('/domains/')) ||
                         (item.name === 'Orchestration' && (location.pathname.includes('/orchestration/') || location.pathname.includes('/nist/'))) ||
                         (item.name === 'Resources' && (location.pathname.includes('/resources') || location.pathname.includes('/docs'))))
                          ? 'text-command-blue-600 dark:text-command-blue-400 nav-active-indicator'
                          : 'text-gray-900 dark:text-gray-100 hover:text-command-blue-600 dark:hover:text-command-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md'
                      }`}
                      onClick={() => handleMenuClick(item.name)}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <item.icon className="h-4 w-4 mr-1.5" />
                      <span className="hidden xl:inline">{item.name}</span>
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-all duration-200 ${
                        ((item.name === 'Governance' && governanceMenuOpen) || (item.name === 'Domains' && productMenuOpen) || (item.name === 'Orchestration' && orchestrationMenuOpen))
                          ? 'rotate-180' 
                          : hoveredItem === item.name ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {((item.name === 'Governance' && governanceMenuOpen) || (item.name === 'Domains' && productMenuOpen) || (item.name === 'Orchestration' && orchestrationMenuOpen)) && (
                      <div className="relative">
                        <div
                          className="fixed inset-0 z-10 bg-transparent"
                          onClick={() => {
                            setGovernanceMenuOpen(false);
                            setProductMenuOpen(false);
                            setOrchestrationMenuOpen(false);
                          }}
                        ></div>
                        <div className="absolute z-20 left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                isPathActive(child.href)
                                  ? 'text-command-blue-600 dark:text-command-blue-400 bg-command-blue-50 dark:bg-command-blue-900/20'
                                  : 'text-gray-700 dark:text-gray-200'
                              }`}
                              onClick={() => {
                                // Keep the menus open after selection
                                // Only close mobile menu if open
                                if (isOpen) {
                                  setIsOpen(false);
                                }
                              }}
                            >
                              {child.icon && <child.icon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-3" />}
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <React.Fragment key={item.name}>
                      <Link
                        to={item.href}
                        className={`inline-flex items-center px-2.5 xl:px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          isPathActive(item.href)
                            ? 'text-command-blue-600 dark:text-command-blue-400 nav-active-indicator'
                            : 'text-gray-900 dark:text-gray-100 hover:text-command-blue-600 dark:hover:text-command-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md'
                        }`}
                      >
                      <item.icon className="h-4 w-4 mr-1.5" />
                      <span className="hidden xl:inline">{item.name}</span>
                    </Link>
                  </React.Fragment>
                )
              ))}
            </div>

          
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-command-blue-600 hover:bg-command-blue-700 whitespace-nowrap transition-colors"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              <span className="hidden xl:inline">Command Center</span>
              <span className="xl:hidden">Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <AlignJustify className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {primaryNavigation.map((item) => (
              <React.Fragment key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => {
                        if (item.name === 'Governance') {
                          setGovernanceMenuOpen(!governanceMenuOpen);
                        } else if (item.name === 'Domains') {
                          setProductMenuOpen(!productMenuOpen);
                        } else if (item.name === 'Orchestration') {
                          setOrchestrationMenuOpen(!orchestrationMenuOpen);
                        }
                      }}
                      className={`w-full flex items-center px-4 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        ((item.name === 'Governance' && (location.pathname.includes('framework') || location.pathname.includes('maturity') || location.pathname.includes('compliance') || location.pathname.includes('audit') || location.pathname.includes('executive') || location.pathname.includes('budget'))) ||
                         (item.name === 'Domains' && location.pathname.includes('/domains/')) ||
                         (item.name === 'Orchestration' && (location.pathname.includes('/orchestration/') || location.pathname.includes('/nist/'))) ||
                         (item.name === 'Resources' && (location.pathname.includes('/resources') || location.pathname.includes('/docs'))))
                          ? 'text-command-blue-600 dark:text-command-blue-400 bg-command-blue-50 dark:bg-command-blue-900/20'
                          : 'text-gray-700 dark:text-gray-200'
                       }`}
                    >
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.name}
                       <ChevronDown className={`ml-auto h-5 w-5 transition-transform ${
                        ((item.name === 'Governance' && governanceMenuOpen) || (item.name === 'Domains' && productMenuOpen) || (item.name === 'Orchestration' && orchestrationMenuOpen))
                          ? 'rotate-180' 
                          : ''
                       }`} />
                    </button>
                    {((item.name === 'Governance' && governanceMenuOpen) || (item.name === 'Domains' && productMenuOpen) || (item.name === 'Orchestration' && orchestrationMenuOpen)) && (
                      <div className="bg-gray-50 dark:bg-gray-800">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`flex items-center pl-8 pr-4 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 ${
                              isPathActive(child.href)
                                ? 'text-command-blue-600 dark:text-command-blue-400 bg-command-blue-50 dark:bg-command-blue-900/20'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                            onClick={() => {
                              // Keep the menus open after selection
                              // Only close mobile menu if needed
                              setIsOpen(false);
                            }}
                          >
                            {child.icon && <child.icon className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400" />}
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      to={item.href}
                      className={`flex items-center px-4 py-2 text-base font-medium ${
                        isPathActive(item.href)
                          ? 'text-command-blue-600 dark:text-command-blue-400 bg-command-blue-50 dark:bg-command-blue-900'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.name}
                    </Link>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4 space-x-4">
              <Link
                to="/dashboard"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-command-blue-600 hover:bg-command-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Command Center
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;