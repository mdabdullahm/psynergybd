import AppointmentHero from "@/components/appointments/appointment-hero";
import AppointmentProcess from "@/components/appointments/appointment-process";
import AvailableSpecialists from "@/components/appointments/available-specialists";
import BookingForm from "@/components/appointments/booking-form";
import ClinicSchedule from "@/components/appointments/clinic-schedule";
import ConsultationTypes from "@/components/appointments/consultation-types";
import EmergencyBanner from "@/components/appointments/emergency-banner";
import Pricing from "@/components/appointments/pricing";

export default function AppointmentsPage() {
  return (
    <main>
      <AppointmentHero />
      <BookingForm/>
      <AppointmentProcess/>
      <ConsultationTypes/>
      <AvailableSpecialists/>
      <ClinicSchedule/>
      <Pricing/>
      <EmergencyBanner/>
    </main>
  );
}