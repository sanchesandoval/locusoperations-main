import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Building2, Users, Clock, BarChart3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PipelineDiagnostic = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    clinicName: "",
    contactName: "",
    email: "",
    phone: "",
    locations: "",
    monthlyLeads: "",
    afterHoursPercentage: "",
    currentEMR: "",
    primaryChallenge: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to Calendly for qualified leads
    window.location.href = "https://calendly.com/locusops";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container-main">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-medium mb-4">Locus Elite</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pipeline Diagnostic
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete this brief assessment so we can prepare a customized SIO 
              System Audit for your multi-location enterprise.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="card-premium p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">50-60%</p>
                  <p className="text-sm text-muted-foreground">After-hours bookings lost</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">21x</p>
                  <p className="text-sm text-muted-foreground">Higher qualification rate</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">5 min</p>
                  <p className="text-sm text-muted-foreground">Critical response window</p>
                </div>
                <div>
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Lead capture coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="card-premium p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Clinic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">
                    Clinic Information
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clinicName">Clinic Name *</Label>
                      <Input
                        id="clinicName"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleInputChange}
                        placeholder="Your clinic name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="locations">Number of Locations *</Label>
                      <Select
                        value={formData.locations}
                        onValueChange={(value) => handleSelectChange("locations", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Location</SelectItem>
                          <SelectItem value="2-3">2-3 Locations</SelectItem>
                          <SelectItem value="4-10">4-10 Locations</SelectItem>
                          <SelectItem value="10+">10+ Locations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@clinic.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Operations Data */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">
                    Operations Data
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyLeads">Monthly Lead Volume *</Label>
                      <Select
                        value={formData.monthlyLeads}
                        onValueChange={(value) => handleSelectChange("monthlyLeads", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50">Under 50</SelectItem>
                          <SelectItem value="50-100">50-100</SelectItem>
                          <SelectItem value="100-250">100-250</SelectItem>
                          <SelectItem value="250-500">250-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="afterHoursPercentage">Estimated After-Hours Inquiries *</Label>
                      <Select
                        value={formData.afterHoursPercentage}
                        onValueChange={(value) => handleSelectChange("afterHoursPercentage", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-20">Under 20%</SelectItem>
                          <SelectItem value="20-40">20-40%</SelectItem>
                          <SelectItem value="40-60">40-60%</SelectItem>
                          <SelectItem value="60+">60%+</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentEMR">Current EMR/EHR System</Label>
                    <Input
                      id="currentEMR"
                      name="currentEMR"
                      value={formData.currentEMR}
                      onChange={handleInputChange}
                      placeholder="e.g., PatientNow, Jane App, Zenoti..."
                    />
                  </div>
                </div>

                {/* Primary Challenge */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">
                    Primary Challenge
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="primaryChallenge">What's your biggest operational bottleneck? *</Label>
                    <Select
                      value={formData.primaryChallenge}
                      onValueChange={(value) => handleSelectChange("primaryChallenge", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select challenge" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lead-response">Slow lead response times</SelectItem>
                        <SelectItem value="after-hours">After-hours lead capture</SelectItem>
                        <SelectItem value="staff-bandwidth">Front desk bandwidth</SelectItem>
                        <SelectItem value="multi-location">Multi-location coordination</SelectItem>
                        <SelectItem value="tech-integration">Tech stack integration</SelectItem>
                        <SelectItem value="scaling">Scaling operations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your current situation and goals..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      Schedule Your SIO System Audit
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  You'll be redirected to schedule your personalized consultation
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PipelineDiagnostic;
