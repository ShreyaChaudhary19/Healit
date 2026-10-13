export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  fee: string;
  rating: number;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sharma',
    specialization: 'Cardiologist',
    experience: '15 Years',
    fee: '₹700',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Dr. Singh',
    specialization: 'Dermatologist',
    experience: '10 Years',
    fee: '₹600',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Dr. Patel',
    specialization: 'General Physician',
    experience: '12 Years',
    fee: '₹500',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Dr. Mehta',
    specialization: 'Neurologist',
    experience: '18 Years',
    fee: '₹1000',
    rating: 4.9,
  },
  {
    id: '5',
    name: 'Dr. Kapoor',
    specialization: 'Orthopedic',
    experience: '11 Years',
    fee: '₹650',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Dr. Verma',
    specialization: 'Ophthalmologist',
    experience: '9 Years',
    fee: '₹550',
    rating: 4.6,
  },
];