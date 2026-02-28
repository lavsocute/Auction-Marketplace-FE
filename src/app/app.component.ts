import { Component } from '@angular/core';
import { AuctionCardComponent } from './features/auctions/auction-card/auction-card.component';

@Component({
  selector: 'app-root',
  imports: [AuctionCardComponent],
  template: `
    <div class="min-h-screen p-8 flex flex-col items-center justify-center gap-8 bg-zinc-950">
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-5xl font-display uppercase tracking-widest text-zinc-50">
          Arena <span class="text-orange-500">Live</span>
        </h1>
        <p class="text-zinc-400 text-lg">
          Welcome to the high-stakes auction floor. Powered by Angular 19 & Tailwind CSS Object B.
        </p>
      </div>

      <app-auction-card></app-auction-card>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Auction-Marketplace-FE';
}
