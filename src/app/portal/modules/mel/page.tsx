import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Target,
  FileText,
  TrendingUp,
  Play,
  Shield
} from 'lucide-react';

export const metadata = {
  title: 'M.E.L. AI',
  description:
    'Master Intelligence Engine - AI-powered coaching with Claude Sonnet 4'
};

export default function MELPage() {
  return (
    <div className='space-y-6 p-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='bg-gradient-to-r from-amt-red to-amt-accent bg-clip-text text-3xl font-bold text-transparent'>
            M.E.L. AI
          </h1>
          <p className='mt-2 text-muted-foreground'>
            Master Intelligence Engine powered by Claude Sonnet 4
          </p>
        </div>
        <Badge className='border-green-500/20 bg-green-500/10 text-green-500'>
          Active
        </Badge>
      </div>

      {/* Capabilities Grid */}
      <div className='grid gap-4 md:grid-cols-3'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Triangle Defense Analysis
            </CardTitle>
            <Target className='h-4 w-4 text-amt-accent' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2.3K</div>
            <p className='text-xs text-muted-foreground'>Formations analyzed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Coaching Insights
            </CardTitle>
            <Brain className='h-4 w-4 text-amt-accent' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>847</div>
            <p className='text-xs text-muted-foreground'>AI recommendations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Success Rate</CardTitle>
            <TrendingUp className='h-4 w-4 text-amt-accent' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>94%</div>
            <p className='text-xs text-muted-foreground'>Prediction accuracy</p>
          </CardContent>
        </Card>
      </div>

      {/* Main AI Interface */}
      <Card>
        <CardHeader>
          <CardTitle>AI Coaching Assistant</CardTitle>
          <CardDescription>
            Ask M.E.L. for Triangle Defense analysis, game planning, and
            strategic insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/20'>
            <div className='space-y-4 p-8 text-center'>
              <Brain className='mx-auto h-16 w-16 text-amt-accent' />
              <div>
                <h3 className='text-lg font-semibold'>
                  M.E.L. AI Chat Interface
                </h3>
                <p className='mx-auto mt-2 max-w-md text-sm text-muted-foreground'>
                  Interactive AI coaching powered by Claude Sonnet 4. Analyze
                  formations, get game strategies, and receive personalized
                  coaching recommendations.
                </p>
              </div>
              <div className='pt-4'>
                <code className='rounded bg-muted px-3 py-1 text-xs'>
                  ANTHROPIC_API_KEY required
                </code>
              </div>
              <Button className='bg-amt-red hover:bg-amt-red/90'>
                Start Coaching Session
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Triangle Defense Analysis */}
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Shield className='h-5 w-5 text-amt-red' />
              Triangle Defense Classifications
            </CardTitle>
            <CardDescription>Formation analysis by type</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='flex items-center justify-between rounded-lg bg-accent/50 p-2'>
              <div className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-[#4ECDC4]'></div>
                <span className='text-sm font-medium'>LARRY</span>
              </div>
              <span className='text-sm text-muted-foreground'>
                MO Left + Male
              </span>
              <Badge variant='outline'>342</Badge>
            </div>
            <div className='flex items-center justify-between rounded-lg p-2'>
              <div className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-[#FF6B6B]'></div>
                <span className='text-sm font-medium'>LINDA</span>
              </div>
              <span className='text-sm text-muted-foreground'>
                MO Left + Female
              </span>
              <Badge variant='outline'>187</Badge>
            </div>
            <div className='flex items-center justify-between rounded-lg p-2'>
              <div className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-[#FFD93D]'></div>
                <span className='text-sm font-medium'>RICKY</span>
              </div>
              <span className='text-sm text-muted-foreground'>
                MO Right + Male
              </span>
              <Badge variant='outline'>289</Badge>
            </div>
            <div className='flex items-center justify-between rounded-lg p-2'>
              <div className='flex items-center gap-2'>
                <div className='h-3 w-3 rounded-full bg-[#9B59B6]'></div>
                <span className='text-sm font-medium'>RITA</span>
              </div>
              <span className='text-sm text-muted-foreground'>
                MO Right + Female
              </span>
              <Badge variant='outline'>156</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <FileText className='h-5 w-5 text-amt-accent' />
              Recent Analysis
            </CardTitle>
            <CardDescription>Latest M.E.L. AI insights</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>
            <div className='space-y-1 rounded-lg bg-accent/50 p-3 text-sm'>
              <p className='font-medium'>Formation Trend Detected</p>
              <p className='text-muted-foreground'>
                Opponent showing 67% LARRY formations on early downs - recommend
                EDGE triangle with Mac rush
              </p>
              <p className='text-xs text-amt-accent'>2 hours ago</p>
            </div>
            <div className='space-y-1 rounded-lg p-3 text-sm'>
              <p className='font-medium'>Success Rate Analysis</p>
              <p className='text-muted-foreground'>
                Triangle Defense showing 94% disruption rate against
                opponent&apos;s base formations
              </p>
              <p className='text-xs text-amt-accent'>5 hours ago</p>
            </div>
            <div className='space-y-1 rounded-lg p-3 text-sm'>
              <p className='font-medium'>Practice Recommendation</p>
              <p className='text-muted-foreground'>
                Focus on SEAL triangle adjustments vs female formations based on
                game film analysis
              </p>
              <p className='text-xs text-amt-accent'>1 day ago</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common M.E.L. AI tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-3 md:grid-cols-4'>
            <Button variant='outline' className='justify-start'>
              <Play className='mr-2 h-4 w-4' />
              Analyze Formation
            </Button>
            <Button variant='outline' className='justify-start'>
              <FileText className='mr-2 h-4 w-4' />
              Generate Report
            </Button>
            <Button variant='outline' className='justify-start'>
              <Target className='mr-2 h-4 w-4' />
              Game Plan
            </Button>
            <Button variant='outline' className='justify-start'>
              <TrendingUp className='mr-2 h-4 w-4' />
              Trend Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
