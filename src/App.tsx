import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ModalProvider } from './components/modals/ModalProvider';
import { NotificationProvider } from './components/notifications/NotificationSystem';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
import PrivateRoute from './components/PrivateRoute';
import { useGovernanceStore } from './stores/governanceStore';

// Keep HomePage with regular import for initial loading
import HomePage from './pages/HomePage';

// Lazy load pages for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'));
const RansomwarePage = lazy(() => import('./pages/RansomwarePage'));
const SupplyChainPage = lazy(() => import('./pages/SupplyChainPage'));
const PrivacyProtectionPage = lazy(() => import('./pages/PrivacyProtectionPage'));
const SensitiveInfoPage = lazy(() => import('./pages/SensitiveInfoPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const Platform = lazy(() => import('./pages/Platform'));
const DemoPage = lazy(() => import('./pages/DemoPage'));
const ExperienceItPage = lazy(() => import('./pages/ExperienceItPage'));
const DemoCredentialsPage = lazy(() => import('./pages/DemoCredentialsPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CompliancePage = lazy(() => import('./pages/CompliancePage'));
const ImplementationPage = lazy(() => import('./pages/ImplementationPage'));
const RansomwareAssessment = lazy(() => import('./pages/RansomwareAssessment'));
const RansomwareResults = lazy(() => import('./pages/RansomwareResults'));
const RansomwareRecommendations = lazy(() => import('./pages/RansomwareRecommendations'));
const CuiAssessment = lazy(() => import('./pages/CuiAssessment'));
const CuiResults = lazy(() => import('./pages/CuiResults'));
const CuiRecommendations = lazy(() => import('./pages/CuiRecommendations'));
const NistCsfAssessment = lazy(() => import('./pages/NistCsfAssessment'));

// Lazy load all other pages
const FrameworkMapper = lazy(() => import('./pages/FrameworkMapper'));
const MaturityTracker = lazy(() => import('./pages/MaturityTracker'));
const ComplianceOrchestrator = lazy(() => import('./pages/ComplianceOrchestrator'));
const AuditPackager = lazy(() => import('./pages/AuditPackager'));
const BudgetSimulator = lazy(() => import('./pages/BudgetSimulator'));
const ExecutiveReporting = lazy(() => import('./pages/ExecutiveReporting'));
const IntelligenceEngine = lazy(() => import('./components/intelligence/IntelligenceEngine'));

// Orchestration pages
const TaskManagement = lazy(() => import('./pages/TaskManagement'));
const TimelineManagement = lazy(() => import('./pages/TimelineManagement'));
const EvidenceVault = lazy(() => import('./pages/EvidenceVault'));
const NotificationCenter = lazy(() => import('./pages/NotificationCenter'));

// NIST Implementation pages
const NistCompliancePage = lazy(() => import('./pages/NistCompliancePage'));
const NistEvidencePage = lazy(() => import('./pages/NistEvidencePage'));
const NistCalendarPage = lazy(() => import('./pages/NistCalendarPage'));
const NistAssetsPage = lazy(() => import('./pages/NistAssetsPage'));
const NistPoliciesPage = lazy(() => import('./pages/NistPoliciesPage'));
const NistControlsPage = lazy(() => import('./pages/NistControlsPage'));
const NistTeamPage = lazy(() => import('./pages/NistTeamPage'));
const NistTasksPage = lazy(() => import('./pages/NistTasksPage'));

// ERMITS Assessment pages
const MultiFrameworkAssessmentPage = lazy(() => import('./pages/MultiFrameworkAssessmentPage'));
const AssessmentComparisonPage = lazy(() => import('./pages/AssessmentComparisonPage'));
const AssessmentTemplatePage = lazy(() => import('./pages/AssessmentTemplatePage'));
const PolicyRepositoryPage = lazy(() => import('./pages/PolicyRepositoryPage'));
const UnifiedWorkflowPage = lazy(() => import('./pages/UnifiedWorkflowPage'));

function App() {
  const { loadErmitsFrameworks, loadNistCsfFramework } = useGovernanceStore();

  useEffect(() => {
    loadErmitsFrameworks();
    loadNistCsfFramework();
  }, [loadErmitsFrameworks, loadNistCsfFramework]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <NotificationProvider>
            <AuthProvider>
              <ModalProvider>
                <BrowserRouter>
                  <Layout>
                    <Suspense fallback={<LoadingSpinner size="lg" text="Loading application..." className="min-h-screen" />}>
                      <Routes>
                      {/* Public routes */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/security" element={<SecurityPage />} />
                      <Route path="/platform" element={<Platform />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/experience" element={<ExperienceItPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/partners" element={<PartnerPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/compliance" element={<CompliancePage />} />
                      <Route path="/implementation" element={<ImplementationPage />} />
                      <Route path="/resources" element={<ResourcesPage />} />
                      <Route path="/docs" element={<DocumentationPage />} />
                      <Route path="/docs/:docId" element={<DocumentationPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      
                      {/* Domain pages - ERMITS Ecosystem Products */}
                      <Route path="/domains/threat-intelligence" element={<RansomwarePage />} />
                      <Route path="/domains/supply-chain-risk" element={<SupplyChainPage />} />
                      <Route path="/domains/compliance-management" element={<PrivacyProtectionPage />} />
                      <Route path="/domains/training-awareness" element={<SensitiveInfoPage />} />
                      {/* Legacy routes for backward compatibility */}
                      <Route path="/domains/ransomware" element={<RansomwarePage />} />
                      <Route path="/domains/supply-chain" element={<SupplyChainPage />} />
                      <Route path="/domains/privacy" element={<PrivacyProtectionPage />} />
                      <Route path="/domains/sensitive-info" element={<SensitiveInfoPage />} />
                      
                      {/* Assessment routes */}
                      <Route path="/assessment" element={<AssessmentPage />} />
                      <Route path="/assessment/:id" element={<AssessmentPage />} />
                      <Route path="/ransomware-assessment" element={<RansomwareAssessment />} />
                      <Route path="/ransomware-results" element={<RansomwareResults />} />
                      <Route path="/ransomware-recommendations" element={<RansomwareRecommendations />} />
                      <Route path="/cui-assessment" element={<CuiAssessment />} />
                      <Route path="/cui-results" element={<CuiResults />} />
                      <Route path="/cui-recommendations" element={<CuiRecommendations />} />
                      <Route path="/assessments/nist-csf" element={<NistCsfAssessment />} />
                      
                      {/* Auth routes */}
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                      <Route path="/demo-credentials" element={<DemoCredentialsPage />} />
                      
                      {/* Dashboard and governance routes - public access for now */}
                      <Route path="/dashboard" element={
                        <Dashboard />
                      } />
                      <Route path="/workflow" element={<UnifiedWorkflowPage />} />
                      <Route path="/framework-mapper" element={<FrameworkMapper />} />
                      <Route path="/maturity-tracker" element={<MaturityTracker />} />
                      <Route path="/compliance-orchestrator" element={<ComplianceOrchestrator />} />
                      <Route path="/audit-packager" element={<AuditPackager />} />
                      <Route path="/budget-simulator" element={<BudgetSimulator />} />
                      <Route path="/executive-reporting" element={<ExecutiveReporting />} />
                     <Route path="/intelligence" element={<IntelligenceEngine />} />
                      
                      {/* Orchestration routes */}
                      <Route path="/orchestration/tasks" element={<TaskManagement />} />
                      <Route path="/orchestration/timelines" element={<TimelineManagement />} />
                      <Route path="/orchestration/evidence" element={<EvidenceVault />} />
                      <Route path="/orchestration/notifications" element={<NotificationCenter />} />
                      
                      {/* NIST Implementation routes */}
                      <Route path="/nist/compliance" element={<NistCompliancePage />} />
                      <Route path="/nist/evidence" element={<NistEvidencePage />} />
                      <Route path="/nist/calendar" element={<NistCalendarPage />} />
                      <Route path="/nist/assets" element={<NistAssetsPage />} />
                      <Route path="/nist/policies" element={<NistPoliciesPage />} />
                      <Route path="/nist/controls" element={<NistControlsPage />} />
                      <Route path="/nist/team" element={<NistTeamPage />} />
                      <Route path="/nist/tasks" element={<NistTasksPage />} />
                      
                      {/* ERMITS Assessment routes */}
                      <Route path="/assessments/multi-framework" element={<MultiFrameworkAssessmentPage />} />
                      <Route path="/assessments/comparison" element={<AssessmentComparisonPage />} />
                      <Route path="/assessments/templates" element={<AssessmentTemplatePage />} />
                      <Route path="/assessments/policies" element={<PolicyRepositoryPage />} />
                      <Route path="/assessments/:frameworkId" element={<AssessmentPage />} />
                      
                      {/* Fallback route */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </Suspense>
                  </Layout>
                </BrowserRouter>
              </ModalProvider>
            </AuthProvider>
          </NotificationProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;