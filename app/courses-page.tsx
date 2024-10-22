import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Instagram, Youtube } from 'lucide-react'
export default function CoursesPage() {
    const courses = [
        {
            title: '12 DAY - PSYCH ONLINE COURSE',
            image: '/PSYCH2POSTER.png',
            price: 'Rs 799/-',
            description: `What will you learn?

📌 How to Write Stories That Truly Reflect Your Personality  
📌 Efficient Approach to Tackle Neutral Pictures  
📌 How to Get Ideas and Write Simple, Positive High-Level Stories  
📌 Meaningful Sentences That Reflect Your Personality and Values  
📌 The Best Way to Deal with SRT  
📌 Personalized Feedback on Your Story Without Compromising Your Personality  
📌 How to Craft a SD That Shows Who You Are and Resonates with Your Personality

Mode: Online
Timings: Evening Slots.
Duration: 1.5hrs session 
Total live classes: ?
Mock tests: 



`,
            link: 'https://forms.gle/DbgjHE94HhYGgqjh9'
        },
        {
            title: 'TJS Master Screening Course',
            image: '/SCREENING2POSTER.png',
            price: 'Rs 499/-',
            description: `What will you get?

📌 8 PP&DT Mocks + OIR Tests  
📌 Master GD and Narration
📌 How to Get Ideas and Write Simple, Positive High-Level Stories  
📌 Art of Story Writing 
📌 Personalized Feedback on Your Story Without Compromising Your Personality  


Mode: Online
Duartion: 7 Days
Timings: Evening Slots.
Duration: 1.5hrs session 
Total live classes: ?
Mock tests: ?





`,
            link: 'https://forms.gle/SpzxW6Ww72PJjWFc8'
        },
        {
            title: 'Personal Interview & Personality Development Course',
            image: '/PI2POSTER.png',
            price: 'Rs 749/-',
            description: `What will you learn?

📌 Comprehensive Personality Development.
📌 Structures Personality Tests & Analysis.
📌 Interactive live sessions. 
📌 Mock Interviews by Board Presidents. 
📌 Personalized Feedback sessions and Dossier reviews.  


Mode: Online
Timings: Evening Slots.
Duration: 1.5hrs session 
Total live classes: ?
Mock tests: ?







`,
            link: 'https://forms.gle/6rq4uNckZ6QbuXfY9'
        },
        {
            title: 'Public Speaking and Effective Communication Master Course with Lt.Cdr (Dr) Sadhna Giri (Retd.)',
            image: '/PUBLICCOMM2POSTER.png',
            price: 'Rs 499/-',
            description: `Details of course:
Duration: 03 Weeks
Mode: Online Zoom Meeting





`,
            link: 'https://forms.gle/N9aeDZAzXSpx8C4b9'
        },
        {
            title: 'OIR Master Guide',
            image: '/OIR MASTER GUIDE POSTER.png',
            price: 'Rs 99/-',
            description: `WHAT YOU GET?

📌 India's First User-Interactive Workbook.
📌 200+ SSB SRT Problems.
📌 Sample responses by experts.
📌 QR codes inside for Assessments by Experts.
📌 Book 1-1 interactive sessions at no extra cost using links provided inside the e-book.



`,
            link: 'https://forms.gle/Ch7u1BnSbmy5wiug9'
        },
        {
            title: 'WAT MASTER GUIDE',
            image: '/WAT MASTER GUIDE POSTER.png',
            price: 'Rs 99/-',
            description: `WHAT YOU GET?
📌 India's First User-Interactive Workbook.
📌 60+ SSB WAT Pictures.
📌 Sample responses by experts.
📌 QR codes inside for Assessments by Experts.
📌 Book 1-1 interactive sessions at no extra cost using links provided inside the e-book.
📌 E-Dossiers and Assessment reports.
📌 Mock SSB Attempts in virtual set-up.
📌 30+ WAT pictures for Female Candidates.
📌 Link embedded video tutorials.`,
            link: 'https://forms.gle/ABoHANR3UxPMZmSM8'
        },
        {
            title: 'TAT Master Guide',
            image: '/TAT MASTER GUIDE POSTER.png',
            price: 'Rs 99/-',
            description: `WHAT YOU GET?
📌 India's First User-Interactive Workbook.
📌 60+ SSB TAT Pictures.
📌 Sample responses by experts.
📌 QR codes inside for Assessments by Experts.
📌 Book 1-1 interactive sessions at no extra cost using links provided inside the e-book.
📌 E-Dossiers and Assessment reports.
📌 Mock SSB Attempts in virtual set-up.
📌 30+ TAT pictures for Female Candidates.
📌 Link embedded video tutorials.

`,
            link: 'https://forms.gle/BgBaDkxWaMmpgjoJA'
        },
        {
            title: 'SRT Master Guide',
            image: '/SRT MASTER GUIDE POSTER.png',
            price: 'Rs 99/-',
            description: `WHAT YOU GET?
📌 India's First User-Interactive Workbook.
📌 200+ SSB SRT Problems.
📌 Sample responses by experts.
📌 QR codes inside for Assessments by Experts.
📌 Book 1-1 interactive sessions at no extra cost using links provided inside the e-book.
📌 E-Dossiers and Assessment reports.
📌 Inshort a full SRT Capsule @99/-
📌 Mock SSB Attempts in virtual set-up.
📌 Subject specific verified content.
📌 Link embedded video tutorials.`,
            link: 'https://forms.gle/9fWgXUMCfNNh4s4Z9'
        },
        {
            title: 'GPE Master Guide',
            image: '/GPE MASTER GUIDE POSTER.png',
            price: 'Rs 99/-',
            description: `WHAT YOU GET?
📌 India's First User-Interactive Workbook.
📌 20+ SSB GPE Problems.
📌 Sample responses by experts.
📌 QR codes inside for Assessments by Experts.
📌 Book 1-1 interactive sessions at no extra cost using links provided inside the e-book.
📌 E-Dossiers and Assessment reports.
📌 Inshort a full GPE Capsule @99/-
📌 Mock SSB Attempts in virtual set-up.
📌 Subject specific verified content.
📌 Link embedded video tutorials.`,
            link: 'https://forms.gle/PMfLotV33bkRj9McA'
        },
        {
            title: 'NDA/NA Master Guide',
            image: '/NDA MASTER GUIDE POSTER.png',
            price: 'Rs 199/-',
            description: `Introducing India's only leading interactive E-book consisting of:
📌 800 + Solved MCQs with more than 1800+ pages.
📌 Chapter wise tricks and important ques.
📌 Last 10 years Previous Year Question papers straight as designed by UPSC.
📌 QR Codes which you can scan to access Video tutorial course of NDA for last minute revision and tricks and tips and important questions.
📌 Access to 1 shot Revision Master classes.`,
            link: 'https://forms.gle/2FLH7SDbWLsbtW6k7'
        },
        {
            title: 'CDS Master Guide',
            image: '/CDS MASTER GUIDE POSTER.png',
            price: 'Rs 149/-',
            description: `Introducing India's only leading interactive E-book consisting of:
📌 800 + Solved MCQs with more than 1800+ pages.
📌 Chapter wise tricks and important ques.
📌 Last 10 years Previous Year Question papers straight as designed by UPSC.
📌 QR Codes which you can scan to access Video tutorial course of CDS for last minute revision and tricks and tips and important questions.
📌 Access to 1 shot Revision Master classes.`,
            link: 'https://forms.gle/skUkrniwNfwpkLeo7'
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="bg-yellow-400 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/TJS logo.jpg"
                        alt="TJS Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <h1 className="text-black text-2xl font-bold ml-4">The Josh Squad Courses</h1>
                </div>
                <div className="flex items-center space-x-4 mr-4">
                    <a href="https://www.instagram.com/the.josh.squad/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800">
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href="https://www.youtube.com/@TheJoshSquadOfficial" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800">
                        <Youtube size={24} />
                        <span className="sr-only">YouTube</span>
                    </a>
                </div>
            </nav>
            <main className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">{course.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={300}
                                    height={200}
                                    layout="responsive"
                                    className="rounded-md"
                                />
                                <p className="mt-4 font-bold text-white text-lg">{course.price}</p>
                                <CardDescription className="mt-2 text-white font-bold whitespace-pre-line">
                                    {course.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                                    <a href={course.link} target="_blank" rel="noopener noreferrer">Enroll Now</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}
