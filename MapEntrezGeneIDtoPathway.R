MapEntrezGeneIDtoPathway=function(dataGenes){
#### Script to get the associated pathways from ConsensuspathDB offline database
#### Pathway database downloaded from http://www.consensuspathdb.org
#### @ 05-06-2017;  script: T.J.M. Kuijpers

## Load the database
DB=read.table('www/CPDB_pathways_genes.tab',header=TRUE,sep='\t',fill=TRUE,stringsAsFactors = FALSE)
Genes=DB$entrez_gene_ids

## Map the entrez gene id to the database and extract the information
GeneInformation=list()
TotalPathways=list()
for(ind in 1:dim(dataGenes)[1]){
  indexGenes=grepl(dataGenes[ind,1],Genes)
  PositionGenes=which(indexGenes==TRUE)
  PathwayGene=data.frame(DB$pathway[PositionGenes])
  TotalPathways=rbind(TotalPathways,PathwayGene)
  GeneInformation[[ind]]=PathwayGene
  }
### Plot the statistics
# Calculate unique pathways
UniquePathways=as.data.frame(table(TotalPathways))
UniquePathways=UniquePathways[order(-UniquePathways$Freq),]
assign('UniquePathways',UniquePathways,env=.GlobalEnv)
}