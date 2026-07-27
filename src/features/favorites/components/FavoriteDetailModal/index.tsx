import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import BaseRow from '@/shared/components/ui/BaseRow';
import { ScrollView, Text, View } from 'react-native';
import FavoritePoster from '../FavoritePoster';
import FavoriteTitle from '../FavoriteTitle';
import { FavoriteDetailModalProps } from './interfaces/favorite-detail-modal.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FavoriteDetailModal = ({
  selected,
  onClose,
}: FavoriteDetailModalProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <BaseModal size="full" visible={!!selected}>
      {selected && (
        <ScrollView
          className="flex-1 w-full"
          style={{
            paddingTop: top,
          }}
        >
          <View className="relative">
            {/*Container*/}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                rowGap: 20,
                marginTop: 70,
              }}
            >
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

              <View className="bg-ink-3 p-7 rounded-t-3xl">
                <Text className="uppercase font-oswald-semibold text-white text-2xl pb-5">
                  Biografía
                </Text>
                <Text
                  className="font-dmsans-medium text-white"
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
              icon="x"
              style={{
                position: 'absolute',
                top: 0,
                left: 25,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: 8,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              color="text-ink-3"
              onPress={onClose}
            />
          </View>
        </ScrollView>
      )}
    </BaseModal>
  );
};

export default FavoriteDetailModal;
