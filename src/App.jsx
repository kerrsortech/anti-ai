import { useState } from 'react'
import { 
  Shield, Building, Package, GraduationCap, ShoppingCart, 
  CreditCard, CheckCircle2, Upload, Search, Zap, AlertTriangle,
  TrendingUp, Smartphone, Camera, Bot, ArrowRight, Linkedin,
  Clock, DollarSign, TrendingDown, Users, AlertCircle, XCircle,
  Target, FileImage, Code, LayoutDashboard, RefreshCw, Lock
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Select } from './components/ui/select'
import { Badge } from './components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: '',
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate form submission
    setIsSubmitted(true)
    setErrors({})
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-text">RealSight</span>
          </div>
          <Button onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-screen items-start justify-center pt-20 sm:pt-24 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-200/40 text-black px-4 py-1.5">platform launching soon</Badge>
            <h1 className="mb-6 text-4xl font-bold text-text sm:text-5xl lg:text-6xl" style={{ lineHeight: '1.4' }}>
              Stop AI Image Fraud Before It Costs You Millions
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-text-secondary sm:text-xl">
              Anyone with a smartphone can now create perfect fake images in seconds. We detect AI-generated and manipulated images at the pixel level, even after screenshots strip away all metadata.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Join Our Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-text-muted">
              Preparing to serve insurance, banking, education, and delivery platforms globally
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">The Crisis</p>
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
              AI Creates Perfect Fakes. Detection Can't Keep Up
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Traditional detection relies on metadata and watermarks.
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Smartphone className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">Universal Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Every smartphone user now has free access to professional-grade AI image generators. No technical skills required. No cost barrier. Unlimited fake images on demand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Camera className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">The Screenshot Loophole</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Current detection tools look for metadata, watermarks, and file signatures. Fraudsters simply take screenshots, and all tracking data vanishes instantly. Detection fails.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bot className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-xl">Automation Trap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  Companies are automating claim approvals to cut costs. AI-generated fraud slips through AI-automated systems. No human review means billions in undetected losses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">300%</div>
                <p className="text-sm font-medium text-text">ITIJ</p>
                <p className="mt-2 text-sm text-text-muted">Increase in AI-manipulated insurance fraud (Allianz)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">83%</div>
                <p className="text-sm font-medium text-text">Sprout.ai Survey</p>
                <p className="mt-2 text-sm text-text-muted">Of claims handlers suspect AI manipulation in at least 5% of claims</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">£501M</div>
                <p className="text-sm font-medium text-text">Association of British Insurers</p>
                <p className="mt-2 text-sm text-text-muted">Lost to fraudulent motor claims in UK via AI-manipulated vehicle photos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">15.14%</div>
                <p className="text-sm font-medium text-text">Appriss Retail & Deloitte</p>
                <p className="mt-2 text-sm text-text-muted">Of all retail returns involve fraud or abuse (2024)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">This Is Already Happening</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Insurance Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 font-semibold text-text">
                  "Images Being Digitally Modified to Include Registration Numbers"
                </p>
                <p className="text-sm text-text-muted mb-2">Insurance Business America</p>
                <p className="text-text-secondary">
                  Fraudsters are using AI to manipulate accident photos, add damage to vehicles that never existed, and create synthetic injury documentation. Some are photoshopping registration numbers onto total loss vehicles and collecting insurance payouts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Food Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 font-semibold text-text">
                  "48% of Fraud Involves Fake Images"
                </p>
                <p className="text-sm text-text-muted mb-2">Sift</p>
                <p className="text-text-secondary">
                  Customers create fake images of spoiled or incorrect food to claim refunds, costing the industry an estimated $103 billion in 2024. One fraudster created 200+ accounts and stole over $5,000 using AI-generated complaint images.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShoppingCart className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">E-commerce & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 font-semibold text-text">
                  "Chinese Shoppers Using AI to Create Fake Product Photos for Refunds"
                </p>
                <p className="text-sm text-text-muted mb-2">Swiss Re</p>
                <p className="text-text-secondary">
                  Shoppers use AI to create fake damage photos: moldy fruit, rusty toothbrushes, defective clothing. GAN-generated scratches and Photoshop layering make fraud undetectable. Retailers lost $104 billion in 2024, with 15.14% of returns involving fraud.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-text">
              The question isn't if this will happen to your business. It's when.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
              Detection That Works After the Screenshot
            </h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              We built our platform to solve the problem everyone else ignores: pixel-level detection that survives screenshots, compression, and metadata removal.
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col text-center">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    1
                  </div>
                  <Upload className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Upload or Integrate</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-text-secondary leading-relaxed">
                  Send images through our API or upload directly to our platform. Integration takes minutes, not months.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    2
                  </div>
                  <Search className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Pixel-Level Analysis</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-text-secondary leading-relaxed">
                  We analyze the fundamental structure AI generation leaves behind, not surface markers. Our models detect artifacts invisible to human eyes and traditional tools.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col text-center">
              <CardHeader className="pb-4">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    3
                  </div>
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Instant Verdict</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <p className="text-text-secondary leading-relaxed">
                  Get a confidence score (0-100%) in under a second. Flag suspicious images for review or auto-reject based on your risk threshold.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-center text-lg font-semibold text-text">
              We Detect Images Which Are
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Bot className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>Complete AI Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    Images created entirely by AI models (Midjourney, Stable Diffusion, DALL-E, Flux, and emerging tools)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Camera className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>AI Manipulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    Real photos edited with AI: enhanced damage, added elements, removed details, or altered content
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
              Built for Businesses Under&nbsp;Attack
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Insurance',
                description: 'Verify claim photos instantly. Stop fraudulent damage reports, manipulated accident evidence, and synthetic documentation before payout.',
                threat: '300% increase in digitally manipulated claim images (ITIJ)'
              },
              {
                icon: Building,
                title: 'Banking & Finance',
                description: 'Authenticate identity documents, bank statements, and KYC submissions. Prevent forged credentials and document fraud.',
                threat: 'Financial sector loses average of $600,000 per deepfake incident (CFO.com)'
              },
              {
                icon: Package,
                title: 'Food Delivery',
                description: 'Distinguish real complaints from AI-generated refund scams. Protect merchants and maintain platform integrity.',
                threat: '$103 billion lost to refund abuse, 48% involves fake images (Sift)'
              },
              {
                icon: GraduationCap,
                title: 'Education',
                description: 'Verify transcripts, diplomas, student IDs, and academic credentials instantly. Protect institutional integrity.',
                threat: 'Rising tide of AI-generated and manipulated academic documents'
              },
              {
                icon: ShoppingCart,
                title: 'E-commerce & Retail',
                description: 'Stop fraudulent return claims with fake damage photos. Prevent systematic abuse and protect margins.',
                threat: 'Coordinated fraud rings exploiting return policies at scale'
              },
              {
                icon: CreditCard,
                title: 'Identity Verification',
                description: 'Ensure authenticity of passports, government IDs, and official documents for secure onboarding.',
                threat: 'AI-generated fake IDs and forged government documents'
              }
            ].map((industry, idx) => (
              <Card key={idx} className="flex flex-col">
                <CardHeader>
                  <industry.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-text-secondary">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-background-subtle py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
                Built for Scale, Designed for Simplicity
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Enterprise-grade features that integrate seamlessly into your workflow
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    RESTful API for instant verdicts. High-volume processing. Integrate in hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Dashboard & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Manual uploads, review flagged content, track trends, export reports.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Continuous Evolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Monthly model updates for new AI generators. Stay ahead of fraudsters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Custom Model Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    Industry-specific models fine-tuned for your exact use case.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Privacy-First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    No image storage. GDPR compliant. Your data stays yours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Flexible Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-text-secondary">
                    API for automation or web platform for manual verification. Use both.
                  </p>
                </CardContent>
              </Card>
            </div>
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
              <h2 className="mb-4 text-3xl font-bold leading-[1.3] text-text text-balance sm:text-4xl lg:text-5xl sm:leading-[1.4]">
                Get Protected Early
              </h2>
              <p className="text-lg text-text-secondary">
                Our platform launches soon. Join our waitlist for early access, priority onboarding, and founding customer benefits.
              </p>
            </div>

            {isSubmitted ? (
              <Card className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-2xl font-semibold text-text">Thank You!</h3>
                  <p className="text-text-secondary">
                    We've received your information. You'll be among the first to know when we launch.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'border-red-500' : ''}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">
                        Work Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="companyName">
                        Company Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={errors.companyName ? 'border-red-500' : ''}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="industry">
                        Industry <span className="text-primary">*</span>
                      </Label>
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
                        <option value="food-delivery">Food Delivery & Hospitality</option>
                        <option value="ecommerce">E-commerce & Retail</option>
                        <option value="education">Education</option>
                        <option value="identity">Identity Verification Services</option>
                        <option value="other">Other</option>
                      </Select>
                      {errors.industry && (
                        <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="source">
                        How did you hear about us? <span className="text-text-muted">(optional)</span>
                      </Label>
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
              <h3 className="mb-4 text-lg font-semibold text-text">About</h3>
              <p className="text-sm text-text-secondary">
                Building the infrastructure to verify image authenticity in the age of synthetic media. Protecting businesses from AI-generated fraud.
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
            © 2025 RealSight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

