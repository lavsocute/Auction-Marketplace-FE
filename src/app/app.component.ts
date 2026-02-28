import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AuctionCardComponent } from './features/auctions/auction-card/auction-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, AuctionCardComponent],
  template: `
    <div class="min-h-screen bg-[#0B0E14] text-white flex flex-col font-sans overflow-hidden">
      <!-- Top Navbar -->
      <app-navbar></app-navbar>

      <!-- Main Layout -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar Filters -->
        <app-sidebar></app-sidebar>

        <!-- Main Content Area -->
        <main class="flex-1 p-6 overflow-y-auto custom-scroll relative">
          
          <!-- Toolbar -->
          <div class="flex items-center justify-between mb-6">
            <h1 class="font-display text-2xl tracking-wider text-white uppercase flex items-center gap-2">
              Live Auctions 
              <span class="text-xs bg-[#1A1F2A] px-2 py-1 rounded text-[#8E98A5]">1,204 Items</span>
            </h1>

            <div class="flex items-center gap-4">
              <span class="text-[#8E98A5] text-sm hidden sm:inline-block">Sort by:</span>
              <select class="bg-[#12161E] border border-[#1A1F2A] text-white text-sm rounded-sm px-3 py-1.5 focus:outline-none focus:border-[#5B42F3] cursor-pointer appearance-none">
                <option>Ending Soon</option>
                <option>Newest</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <!-- Highly Dense Grid (Data-heavy focus) -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <!-- Render multiple mock cards to simulate CS.MONEY density -->
            <app-auction-card *ngFor="let item of [1,2,3,4,5,6,7,8,9,10,11,12]"></app-auction-card>
          </div>
          
        </main>
      </div>
    </div>
  `,
  styles: [`
    .custom-scroll::-webkit-scrollbar { width: 6px; }
    .custom-scroll::-webkit-scrollbar-track { background: #0B0E14; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #1A1F2A; border-radius: 4px; }
    .custom-scroll:hover::-webkit-scrollbar-thumb { background: #5B42F3; }
  `]
})
export class AppComponent {
  title = 'Auction-Marketplace-FE';
}
