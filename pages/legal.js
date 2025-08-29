import Layout from '../components/Layout'
export default function Legal(){
  return (<Layout>
    <h1 className="text-3xl font-bold mb-4">Legal (Canada)</h1>
    <h2 id="terms" className="text-xl font-semibold mt-4">Terms of Service</h2>
    <p>These terms apply across Canada. Service availability may vary. Billing disputes within 30 days. Late payments may incur fees.</p>
    <h2 id="privacy" className="text-xl font-semibold mt-4">Privacy (PIPEDA)</h2>
    <p>We comply with PIPEDA. We collect minimal personal information to provide and support services. Contact support for access/correction requests.</p>
    <h2 id="aup" className="text-xl font-semibold mt-4">Acceptable Use Policy</h2>
    <ul className="list-disc pl-5">
      <li>No unlawful activity or rights infringement.</li>
      <li>No spam, malware, or network abuse.</li>
      <li>Residential plans are for personal, non-commercial use.</li>
    </ul>
  </Layout>)
}
