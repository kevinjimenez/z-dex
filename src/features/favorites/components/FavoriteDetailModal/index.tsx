import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import BaseRow from '@/shared/components/ui/BaseRow';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavoritePoster from '../FavoritePoster';
import FavoriteTitle from '../FavoriteTitle';
import { FavoriteDetailModalProps } from './interfaces/favorite-detail-modal.interface';

const FavoriteDetailModal = ({
  selected,
  onClose,
}: FavoriteDetailModalProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <BaseModal size="full" visible={!!selected}>
      {selected && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          className="flex-1 w-full bg-surface-secondary"
          contentContainerStyle={{
            paddingTop: top,
            // paddingBottom: bottom,
          }}
        >
          <View className="relative">
            {/*Container*/}
            <View className="flex-col justify-center items-center mt-20 gap-y-10">
              {/*Poster*/}
              <FavoritePoster image={selected.image} />
              {/*Name*/}
              <FavoriteTitle
                name={selected.name}
                race={selected.race}
                affiliation={selected.affiliation}
              />

              {/*Info*/}
              <View className="flex-col gap-y-4">
                <BaseRow label="Ki Base" value={selected.ki} />
                <BaseRow label="Ki máximo" value={selected.maxKi} />
                <BaseRow label="Planeta" value={selected.originPlanet?.name} />
              </View>

              {/*<View className="flex-1" />*/}

              <View className="bg-ink-terceary p-7 rounded-t-3xl w-full h-fit">
                <Text className="uppercase font-oswald-semibold text-ink-primary-50 text-2xl pb-5">
                  Biografía
                </Text>
                <Text
                  className="font-dmsans-medium text-ink-primary-50"
                  style={{
                    fontSize: 15,
                    lineHeight: 22,
                  }}
                >
                  {selected.description}
                </Text>
              </View>
            </View>

            <BaseButtonIcon
              className="absolute size-12 top-0 left-6 bg-surface-terceary border border-surface-secondary items-center justify-center rounded-full"
              icon="x"
              color="text-ink-terceary"
              onPress={onClose}
            />
          </View>
        </ScrollView>
      )}
    </BaseModal>
  );
};

export default FavoriteDetailModal;
