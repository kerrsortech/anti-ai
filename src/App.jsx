import { useState } from 'react'
import { 
  Shield, Building, Package, GraduationCap, ShoppingCart, 
  CheckCircle2, Upload, Search, Zap, AlertTriangle,
  TrendingUp, Smartphone, Camera, Bot, ArrowRight,
  Clock, DollarSign, Users, AlertCircle, 
  Code, LayoutDashboard, RefreshCw, Lock,
  Layers, Video, Mic, FileText, Brain, BarChart, UserCheck,
  Scan, Sparkles, Edit, ShieldAlert, UploadCloud, XCircle
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Select } from './components/ui/select'
import { Badge } from './components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
import { SigmoraLogo } from './components/SigmoraLogo'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: '',
    primaryUseCase: '',
    source: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!formData.industry) {
      newErrors.industry = 'Industry is required'
    }
    if (!formData.primaryUseCase) {
      newErrors.primaryUseCase = 'Primary use case is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate form submission
    setIsSubmitted(true)
    setErrors({})
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <SigmoraLogo className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-text">Sigmora</span>
          </div>
          <Button onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-[90vh] items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-200/40 text-black px-4 py-1.5 hover:bg-orange-200/40">Platform Launching Soon</Badge>
            <h1 className="mb-6 text-4xl font-bold text-text sm:text-5xl lg:text-6xl tracking-tight" style={{ lineHeight: '1.1' }}>
              Detect AI Fraud Across Images, Video & Audio
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary sm:text-xl max-w-2xl mx-auto">
              We identify AI-generated and manipulated content across all media types - plus extract structured data from any input.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mb-8">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8"
              >
                Join Our Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-text-muted">
              Multi-modal AI detection for insurance, finance, e-commerce, and identity verification
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section: The Crisis */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">The Crisis</p>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
              AI Creates Perfect Fakes. Detection Can't Keep Up.
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Anyone with a smartphone can generate flawless fake images, videos, and audio in seconds. Traditional detection methods fail because they look for markers that are easily removed or never existed.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <Card className="bg-card border-border/50">
              <CardHeader>
                <Smartphone className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">Universal Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Every device now has free access to professional-grade AI generators. The Generative AI market is projected to grow 560% between 2025-2031. No technical skills required.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <Layers className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">Cross-Modal Threat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Fraudsters don't just fake images-they create synthetic voices, manipulate videos, and forge documents. Audio deepfakes are easier to make than video, and few tools detect them reliably.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <ShieldAlert className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">Detection Fails</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  State-of-the-art models see performance drop by ~50% when tested against real-world deepfakes. Current tools weren't built for this reality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "3,000%", source: "Onfido 2024", desc: "Increase in deepfake fraud attempts (2023)" },
              { number: "$40B", source: "Deloitte", desc: "Projected U.S. fraud losses from GenAI by 2027" },
              { number: "49%", source: "Global Business Survey", desc: "Of companies experienced audio/video deepfakes (2024)" },
              { number: "24.5%", source: "Research Study", desc: "Human accuracy at detecting high-quality video deepfakes" }
            ].map((stat, i) => (
              <Card key={i} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">{stat.number}</div>
                  <p className="text-sm font-medium text-text">{stat.source}</p>
                  <p className="mt-2 text-sm text-text-muted">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">This Is Already Happening</p>
            <h2 className="text-3xl font-bold text-text sm:text-4xl">Industries Losing Millions to AI Fraud</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Insurance Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 font-semibold text-text">£501M Lost to Fraudulent Motor Claims</div>
                <p className="text-sm text-text-muted mb-2">Association of British Insurers, 2023</p>
                <p className="text-text-secondary">
                  Motor insurers recorded 45,800 fraudulent claims. Drivers use AI to digitally add scratches and dents. Fraudsters modify images to include registration numbers on vehicles no longer in use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">E-commerce & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 font-semibold text-text">$103B Lost to Fraudulent Returns</div>
                <p className="text-sm text-text-muted mb-2">Appriss Retail & Deloitte, 2024</p>
                <p className="text-text-secondary">
                  Techniques include GAN-generated scratches and Photoshop layering. Sellers received AI-manipulated images of moldy fruit, rusty electronics, and fabricated clothing defects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 font-semibold text-text">$500K Average Loss Per Incident</div>
                <p className="text-sm text-text-muted mb-2">Multiple Industry Reports, 2024</p>
                <p className="text-text-secondary">
                  Businesses faced average losses of nearly $500,000 due to deepfake fraud. One company lost over $25 million after an employee was tricked by a deepfake video call impersonating their CFO.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="solution" className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
              Multi-Modal Detection That Actually Works
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary mb-8">
              We built a platform that detects AI-generated and manipulated content across images, video, and audio-at the pixel, frame, and frequency level. One API. Complete protection.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-text-secondary">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" /> <span>Images</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" /> <span>Video</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-primary" /> <span>Audio</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col text-center border-none shadow-sm">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">1. Submit Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Send images, video, or audio files through our API or upload directly to our platform. Support for all major formats.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center border-none shadow-sm">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Scan className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">2. Multi-Layer Analysis</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Our models analyze at multiple levels: Pixel-level frequency analysis, frame-by-frame temporal inconsistencies, and audio spectral analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center border-none shadow-sm">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">3. Instant Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Receive confidence scores (0-100%) in under a second. Flag suspicious content for review or auto-reject based on your thresholds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detection Capabilities */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">What We Detect</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: "Complete AI Generation", desc: "Content created entirely by AI models (Midjourney, Stable Diffusion, DALL-E, Sora, ElevenLabs)." },
              { icon: Edit, title: "AI Manipulation", desc: "Real content edited with AI-enhanced damage, added elements, removed details, altered faces or voices." },
              { icon: Video, title: "Deepfake Video", desc: "Face swaps, synthetic videos, manipulated footage, and AI-generated video content." },
              { icon: Mic, title: "Voice Cloning", desc: "Synthetic voices, cloned audio, manipulated recordings, and AI-generated speech." },
              { icon: Layers, title: "Hybrid Attacks", desc: "Multi-modal fraud combining fake images, cloned voices, and manipulated videos in coordinated attacks." },
              { icon: FileText, title: "Document Forgery", desc: "AI-manipulated documents, fake IDs, forged certificates, and altered official records." }
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Data Extraction */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Beyond Detection</p>
            <h2 className="mb-6 text-3xl font-bold text-text sm:text-4xl">Extract Structured Data from Any Input</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Need more than verification? Our platform extracts key information from images, videos, and audio-delivering structured JSON output ready for your systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              { title: "Document Processing", desc: "Extract text, numbers, and key-value pairs from scanned documents, IDs, invoices, and forms." },
              { title: "Claims Automation", desc: "Pull damage descriptions, dates, locations, and monetary values from insurance claim submissions." },
              { title: "Video Intelligence", desc: "Extract timestamps, spoken content, visual elements, and metadata from video submissions." },
              { title: "Audio Transcription", desc: "Convert voice recordings to structured text with speaker identification, timestamps, and sentiment analysis." }
            ].map((item, i) => (
              <Card key={i} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-text-secondary">
             {["Custom extraction schemas", "JSON/XML output formats", "Real-time processing", "API and authentic content", "Batch processing support"].map((feat, i) => (
               <div key={i} className="flex items-center">
                 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                 {feat}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">Enterprise-Ready Detection Platform</h2>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                { icon: Code, title: "API-First Architecture", desc: "RESTful API supporting images, video, and audio. Simple integration, high-volume processing, enterprise-grade reliability." },
                { icon: LayoutDashboard, title: "Multi-Modal Detection", desc: "Single API endpoint handles all three input types. Unified confidence scoring across modalities." },
                { icon: Brain, title: "Custom Model Training", desc: "Upload your labeled data. Our pipeline trains custom models fine-tuned for your specific industry and use cases." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">{feat.title}</h3>
                    <p className="text-text-secondary">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                { icon: BarChart, title: "Dashboard & Analytics", desc: "Real-time monitoring, fraud trend analysis, flagged content review queue, and compliance reporting." },
                { icon: RefreshCw, title: "Continuous Updates", desc: "Monthly model updates to recognize new AI generators and manipulation techniques. Stay ahead of fraudsters." },
                { icon: Lock, title: "Privacy-First Design", desc: "We analyze content without storing it. Your data stays yours. Built for GDPR and compliance requirements." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">{feat.title}</h3>
                    <p className="text-text-secondary">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Protect */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-text sm:text-4xl">Multi-Modal Protection for Every Sector</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: 'Insurance', protect: 'Claim photos, damage videos, recorded statements', threat: '£501M lost to fraudulent motor claims (UK, 2023)' },
              { icon: Building, title: 'Banking & Finance', protect: 'ID documents, video KYC, voice authentication', threat: '$500K average loss per deepfake incident' },
              { icon: ShoppingCart, title: 'E-commerce & Retail', protect: 'Return photos, product videos, customer complaints', threat: '$103B lost to fraudulent returns' },
              { icon: Package, title: 'Food Delivery', protect: 'Food condition photos, delivery videos, complaints', threat: '1 in 3 refunds estimated fraudulent' },
              { icon: GraduationCap, title: 'Education', protect: 'Academic documents, student IDs, video submissions', threat: 'Rising AI-generated transcripts & forged credentials' },
              { icon: UserCheck, title: 'Identity Verification', protect: 'Government IDs, passport photos, liveness videos', threat: 'Deepfake attacks bypassing video KYC' }
            ].map((item, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <item.icon className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-primary">Protects</span>
                    <p className="text-sm text-text-secondary mt-1">{item.protect}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-red-500">Threat</span>
                    <p className="text-sm text-text-secondary mt-1">{item.threat}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
                The Window Is Closing
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Every month you wait, fraudsters get better tools. The cost of inaction grows exponentially.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-text">$40B</div>
                      <p className="text-sm text-text-muted">Projected losses by 2027</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Deloitte projects AI-enabled fraud losses will reach $40 billion by 2027, up from $12.3 billion in 2023.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-text">225%</div>
                      <p className="text-sm text-text-muted">Growth rate</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Every month you wait, fraudsters get better tools and more sophisticated techniques.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-red-50 p-2">
                      <DollarSign className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">Financial Cost</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Billions lost to undetected fraud. Insurance premiums rise. Margins shrink.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-orange-50 p-2">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Reputational Cost</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Legitimate customers face suspicion. Trust erodes. Systems break down.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-amber-50 p-2">
                      <XCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">Operational Cost</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Small businesses close from systematic abuse. Automation fails without detection.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call-out Alert */}
            <Alert className="border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
              <AlertCircle className="h-6 w-6 text-primary" />
              <AlertTitle className="text-lg font-semibold text-text">The Reality</AlertTitle>
              <AlertDescription className="mt-2 text-base text-text-secondary">
                By the time most businesses realize they have a deepfake problem, they've already lost hundreds of thousands of dollars.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl">Be Among the First Protected</h2>
              <p className="text-lg text-text-secondary">
                Our multi-modal platform launches soon. Join our waitlist for early access, priority onboarding, and founding customer benefits.
              </p>
            </div>

            {isSubmitted ? (
              <Card className="text-center">
                <CardContent className="pt-12 pb-12">
                  <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-2xl font-semibold text-text">Thank You!</h3>
                  <p className="text-text-secondary">
                    We'll notify you as soon as we launch. Check your email for confirmation.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name <span className="text-primary">*</span></Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'border-red-500' : ''}
                      />
                      {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email <span className="text-primary">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="companyName">Company Name <span className="text-primary">*</span></Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={errors.companyName ? 'border-red-500' : ''}
                      />
                      {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="industry">Industry <span className="text-primary">*</span></Label>
                        <Select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={errors.industry ? 'border-red-500' : ''}
                        >
                          <option value="">Select an industry</option>
                          <option value="insurance">Insurance</option>
                          <option value="banking">Banking & Financial Services</option>
                          <option value="ecommerce">E-commerce & Retail</option>
                          <option value="food">Food Delivery & Hospitality</option>
                          <option value="education">Education</option>
                          <option value="identity">Identity Verification</option>
                          <option value="govt">Government & Public Sector</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="other">Other</option>
                        </Select>
                        {errors.industry && <p className="mt-1 text-sm text-red-500">{errors.industry}</p>}
                      </div>

                      <div>
                        <Label htmlFor="primaryUseCase">Primary Use Case <span className="text-primary">*</span></Label>
                        <Select
                          id="primaryUseCase"
                          name="primaryUseCase"
                          value={formData.primaryUseCase}
                          onChange={handleChange}
                          className={errors.primaryUseCase ? 'border-red-500' : ''}
                        >
                          <option value="">Select use case</option>
                          <option value="image">Image Fraud Detection</option>
                          <option value="video">Video/Deepfake Detection</option>
                          <option value="audio">Voice/Audio Verification</option>
                          <option value="multi">Multi-Modal Detection</option>
                          <option value="doc">Document Verification</option>
                          <option value="data">Data Extraction</option>
                          <option value="all">All of the Above</option>
                        </Select>
                        {errors.primaryUseCase && <p className="mt-1 text-sm text-red-500">{errors.primaryUseCase}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="source">How did you hear about us? <span className="text-text-muted">(optional)</span></Label>
                      <Textarea
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Join the Waitlist
                    </Button>
                    <p className="text-center text-xs text-text-muted">
                      Currently in private beta. Waitlist members receive first access.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-text">Sigmora</h3>
              <p className="text-sm text-text-secondary max-w-xs">
                The Multi-Modal AI Detection Platform. Verifying authenticity across Images, Video, and Audio.
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="mb-4 text-lg font-semibold text-text">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {['About Us', 'How It Works', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-text-muted">
            © 2026 Sigmora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App