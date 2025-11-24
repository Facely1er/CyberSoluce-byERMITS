/**
 * Security Policies Data
 * Comprehensive policy repository for compliance frameworks
 */

export interface SecurityPolicy {
  id: string;
  name: string;
  description: string;
  category: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  frequencyOfUse: string;
  complianceMapping: string[];
  tags: string[];
  lastUpdated: string | Date;
  templateAvailable?: boolean;
  version?: string;
  documentType?: string;
  spanOfUse?: string;
  businessImpact?: string;
  owner?: string;
  approver?: string;
  reviewFrequency?: string;
  estimatedImplementationTime?: string;
  implementationGuidance?: string;
  complianceRequirements?: Array<{
    framework: string;
    mandatory: boolean;
    controls: string[];
  }>;
}

export const securityPolicies: SecurityPolicy[] = [
  {
    id: 'acc-001',
    name: 'Access Control Policy',
    description: 'Defines requirements for user access management, authentication, and authorization across all systems and applications.',
    category: 'Access Control',
    priority: 'critical',
    frequencyOfUse: 'Daily',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'SOC 2', 'HIPAA'],
    tags: ['access-control', 'authentication', 'authorization', 'identity-management'],
    lastUpdated: new Date('2024-01-15'),
    templateAvailable: true,
    version: '2.1',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'High',
    owner: 'IT Security Team',
    approver: 'CISO',
    reviewFrequency: 'Annual',
    estimatedImplementationTime: '2-4 weeks',
    implementationGuidance: 'Implement role-based access control (RBAC), enforce least privilege principles, and establish regular access reviews.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['PR.AC-1', 'PR.AC-3', 'PR.AC-4'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.9.1', 'A.9.2', 'A.9.4'] },
      { framework: 'SOC 2', mandatory: true, controls: ['CC6.1', 'CC6.2'] }
    ]
  },
  {
    id: 'inc-001',
    name: 'Incident Response Policy',
    description: 'Establishes procedures for detecting, responding to, and recovering from security incidents.',
    category: 'Incident Management',
    priority: 'critical',
    frequencyOfUse: 'As needed',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'HIPAA'],
    tags: ['incident-response', 'security-operations', 'breach-response'],
    lastUpdated: new Date('2024-02-01'),
    templateAvailable: true,
    version: '3.0',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'Critical',
    owner: 'Security Operations',
    approver: 'CISO',
    reviewFrequency: 'Semi-annual',
    estimatedImplementationTime: '4-6 weeks',
    implementationGuidance: 'Establish incident response team, define escalation procedures, and conduct regular tabletop exercises.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['RS.RP-1', 'RS.CO-1', 'RS.CO-2'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.16.1'] }
    ]
  },
  {
    id: 'data-001',
    name: 'Data Classification and Handling Policy',
    description: 'Defines data classification levels and handling requirements for different types of sensitive information.',
    category: 'Data Protection',
    priority: 'critical',
    frequencyOfUse: 'Daily',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'HIPAA', 'GDPR'],
    tags: ['data-classification', 'data-protection', 'privacy', 'pii'],
    lastUpdated: new Date('2024-01-20'),
    templateAvailable: true,
    version: '2.3',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'High',
    owner: 'Data Protection Officer',
    approver: 'CISO',
    reviewFrequency: 'Annual',
    estimatedImplementationTime: '3-5 weeks',
    implementationGuidance: 'Classify all data assets, implement data loss prevention (DLP) tools, and train staff on data handling procedures.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['PR.DS-1', 'PR.DS-2'] },
      { framework: 'HIPAA', mandatory: true, controls: ['164.308(a)(3)', '164.312(a)(2)'] },
      { framework: 'GDPR', mandatory: true, controls: ['Article 32'] }
    ]
  },
  {
    id: 'pwd-001',
    name: 'Password Management Policy',
    description: 'Establishes requirements for password creation, storage, and management to ensure strong authentication.',
    category: 'Access Control',
    priority: 'high',
    frequencyOfUse: 'Daily',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'SOC 2'],
    tags: ['password', 'authentication', 'credential-management'],
    lastUpdated: new Date('2024-01-10'),
    templateAvailable: true,
    version: '2.0',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'Medium',
    owner: 'IT Security Team',
    approver: 'IT Director',
    reviewFrequency: 'Annual',
    estimatedImplementationTime: '1-2 weeks',
    implementationGuidance: 'Enforce password complexity requirements, implement password managers, and enable multi-factor authentication.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['PR.AC-1'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.9.4.3'] }
    ]
  },
  {
    id: 'enc-001',
    name: 'Encryption Policy',
    description: 'Defines encryption requirements for data at rest and in transit to protect sensitive information.',
    category: 'Data Protection',
    priority: 'high',
    frequencyOfUse: 'Daily',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'HIPAA', 'PCI DSS'],
    tags: ['encryption', 'data-protection', 'cryptography'],
    lastUpdated: new Date('2024-01-25'),
    templateAvailable: true,
    version: '1.8',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'High',
    owner: 'IT Security Team',
    approver: 'CISO',
    reviewFrequency: 'Annual',
    estimatedImplementationTime: '4-8 weeks',
    implementationGuidance: 'Implement encryption for all sensitive data, use strong encryption algorithms (AES-256), and manage encryption keys securely.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['PR.DS-1'] },
      { framework: 'HIPAA', mandatory: true, controls: ['164.312(a)(2)(iv)'] },
      { framework: 'PCI DSS', mandatory: true, controls: ['Requirement 3', 'Requirement 4'] }
    ]
  },
  {
    id: 'backup-001',
    name: 'Backup and Recovery Policy',
    description: 'Establishes procedures for regular data backups and disaster recovery to ensure business continuity.',
    category: 'Business Continuity',
    priority: 'high',
    frequencyOfUse: 'Weekly',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'SOC 2'],
    tags: ['backup', 'disaster-recovery', 'business-continuity'],
    lastUpdated: new Date('2024-01-18'),
    templateAvailable: true,
    version: '2.2',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'High',
    owner: 'IT Operations',
    approver: 'IT Director',
    reviewFrequency: 'Semi-annual',
    estimatedImplementationTime: '3-6 weeks',
    implementationGuidance: 'Implement automated backup systems, test recovery procedures regularly, and maintain off-site backups.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['RC.RP-1', 'RC.IM-1'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.12.3'] }
    ]
  },
  {
    id: 'vuln-001',
    name: 'Vulnerability Management Policy',
    description: 'Defines processes for identifying, assessing, and remediating security vulnerabilities.',
    category: 'Security Operations',
    priority: 'high',
    frequencyOfUse: 'Weekly',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'SOC 2'],
    tags: ['vulnerability-management', 'patch-management', 'security-operations'],
    lastUpdated: new Date('2024-02-05'),
    templateAvailable: true,
    version: '1.9',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'High',
    owner: 'Security Operations',
    approver: 'CISO',
    reviewFrequency: 'Quarterly',
    estimatedImplementationTime: '4-6 weeks',
    implementationGuidance: 'Implement vulnerability scanning tools, establish patch management procedures, and prioritize critical vulnerabilities.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['DE.CM-1', 'RS.MI-1'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.12.6'] }
    ]
  },
  {
    id: 'aware-001',
    name: 'Security Awareness and Training Policy',
    description: 'Establishes requirements for security awareness training and education programs for all personnel.',
    category: 'Training',
    priority: 'medium',
    frequencyOfUse: 'Quarterly',
    complianceMapping: ['NIST CSF', 'ISO 27001', 'HIPAA'],
    tags: ['training', 'awareness', 'education', 'phishing'],
    lastUpdated: new Date('2024-01-12'),
    templateAvailable: true,
    version: '1.5',
    documentType: 'Policy',
    spanOfUse: 'Organization-wide',
    businessImpact: 'Medium',
    owner: 'Human Resources',
    approver: 'CISO',
    reviewFrequency: 'Annual',
    estimatedImplementationTime: '2-3 weeks',
    implementationGuidance: 'Develop training materials, conduct regular security awareness sessions, and perform phishing simulations.',
    complianceRequirements: [
      { framework: 'NIST CSF', mandatory: true, controls: ['PR.AT-1', 'PR.AT-2'] },
      { framework: 'ISO 27001', mandatory: true, controls: ['A.7.2.2'] }
    ]
  }
];

export const policyCategories: string[] = [
  'Access Control',
  'Incident Management',
  'Data Protection',
  'Business Continuity',
  'Security Operations',
  'Training',
  'Network Security',
  'Physical Security',
  'Third-Party Management',
  'Compliance'
];

export const frameworkMappings: Record<string, string[]> = {
  'NIST CSF': ['acc-001', 'inc-001', 'data-001', 'pwd-001', 'enc-001', 'backup-001', 'vuln-001', 'aware-001'],
  'ISO 27001': ['acc-001', 'inc-001', 'data-001', 'pwd-001', 'enc-001', 'backup-001', 'vuln-001', 'aware-001'],
  'SOC 2': ['acc-001', 'pwd-001', 'enc-001', 'backup-001', 'vuln-001'],
  'HIPAA': ['acc-001', 'inc-001', 'data-001', 'enc-001', 'aware-001'],
  'GDPR': ['data-001', 'enc-001'],
  'PCI DSS': ['enc-001', 'pwd-001']
};
