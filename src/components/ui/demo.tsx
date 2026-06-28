import { Testimonials } from "@/components/ui/testimonials"
import content from "@/lib/content.json"

export function TestimonialsDemo() {
  return (
    <div className="container py-10 mx-auto">
      <Testimonials 
        testimonials={content.testimonialsGrid.items}
        title={content.testimonialsGrid.title}
        description={content.testimonialsGrid.description}
      />
    </div>
  )
}
