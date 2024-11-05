import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

    itemList: any[] = [
        {
            label: "Engagement client 1",
            id: "engagement-client-1",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=4749a9f6089a29b4ba52&navContentPaneEnabled=false"
        },
        {
            label: "Engagement client 2",
            id: "engagement-client-2",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=d49f2cf08ce0d0948b35&navContentPaneEnabled=false"
        },

        {
            label: "Analyse fidelite",
            id: "analyse-fidelite",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=05dd166302d18497cd71&navContentPaneEnabled=false"
        },
        {
            label: "Analyse fidelite 2",
            id: "analyse-fidelite-2",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=b037c473704b9c3b4325&navContentPaneEnabled=false"
        },
        {
            label: "Apercu des annulations",
            id: "apercu-annulations",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=a44595214c3d412d5e83&navContentPaneEnabled=false"
        },
        {
            label: "Cout1",
            id: "cout1",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=4746f5375a62863dcb28&navContentPaneEnabled=false"
        },
        {
            label: "Cout2",
            id: "cout2",
            url: "https://app.powerbi.com/reportEmbed?reportId=77310bf1-bdaa-4f57-b5b4-1c953ed0c72a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=6ec067d43500e376ab5c&navContentPaneEnabled=false"
        },
    ];

    iframeUrl: SafeResourceUrl | null = null;
    showNoSelection = false;
    showInvalidId = false;

    constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');

            if (!id) {
                // Show "no dashboard selected" if `id` is empty
                this.showNoSelection = true;
                this.showInvalidId = false;
                this.iframeUrl = null;
            } else {
                // Find matching item in itemList
                const item = this.itemList.find(item => item.id === id);

                if (item) {
                    // If a match is found, load the corresponding URL in the iframe
                    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.url);
                    console.log(this.iframeUrl);
                    this.showNoSelection = false;
                    this.showInvalidId = false;
                } else {
                    // If no match is found, show "wrong id" message
                    this.iframeUrl = null;
                    this.showNoSelection = false;
                    this.showInvalidId = true;
                }
            }
        });
    }

}
